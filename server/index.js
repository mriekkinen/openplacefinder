const express = require('express')
const sqlite3 = require('sqlite3').verbose()
const cors = require('cors')
const db = require('./db')
const { beginsWith, split } = require('./search-util')

const PORT = 3001
const DB_PATH = './data/server.db'
const DB_MASTER_PATH = './data/taginfo/taginfo-master.db'
const DB_WIKI_PATH = './data/taginfo/taginfo-wiki.db'

const SEARCH_LIMIT = 50

const app = express()
app.use(cors())
app.use(express.json());

try {
  (async () => {
    await db.open(DB_PATH, sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE)
    await db.run('ATTACH DATABASE ? AS master', DB_MASTER_PATH)
    await db.run('ATTACH DATABASE ? AS wiki', DB_WIKI_PATH)

    console.log('Opened all databases')
  })()
} catch (err) {
  console.error('FAILED to open or attach a database')
  console.error(err)
}

const DROP_SEARCH = `
  DROP TABLE IF EXISTS suggestions2
`

const CREATE_SEARCH = `
  CREATE TABLE suggestions2 (
    key         TEXT COLLATE NOCASE,
    value       TEXT COLLATE NOCASE,
    description TEXT COLLATE NOCASE
  )
`

const POPULATE_SEARCH = `
  INSERT INTO suggestions2 (key, value, description)
  SELECT key, value, description
    FROM wikipages
   WHERE lang='en'
     AND description IS NOT NULL
     AND key NOT LIKE '%:%'
`

const SEARCH_BY_KEY_OR_VALUE = `
    SELECT key, value
      FROM suggestions2
     WHERE key LIKE ?
        OR value LIKE ?
  ORDER BY key ASC, value ASC
     LIMIT ?
`;

const SEARCH_BY_VALUE = `
    SELECT key, value
      FROM suggestions2
     WHERE value LIKE ?
  ORDER BY key ASC, value ASC
     LIMIT ?
`;

const SEARCH_BY_KEY_AND_VALUE = `
    SELECT key, value
      FROM suggestions2
     WHERE key = ?
       AND value LIKE ?
  ORDER BY key ASC, value ASC
     LIMIT ?
`;

(async () => {
  await db.run(DROP_SEARCH)
  await db.run(CREATE_SEARCH)
  await db.run(POPULATE_SEARCH)

  console.log('Populated tables for suggestions')
})()

app.get('/api/search', async (req, res) => {
  try {
    const query = req.query.q.trim()

    //if (query.length < 2) return res.json([])

    let { key, value } = split(query)
    if (value === '*') value = null

    let rows
    if (!value) {
      rows = await db.all(
        SEARCH_BY_KEY_OR_VALUE,
        beginsWith(key),
        beginsWith(key),
        SEARCH_LIMIT
      )
    } else if (!key) {
      rows = await db.all(
        SEARCH_BY_VALUE,
        beginsWith(value),
        SEARCH_LIMIT
      )
    } else {
      rows = await db.all(
        SEARCH_BY_KEY_AND_VALUE,
        key,
        beginsWith(value),
        SEARCH_LIMIT
      )
    }

    res.json(rows)
  } catch (err) {
    console.error(err.toString())
    res.status(500).json({
      error: err,
      description: err.toString()
    })
  }
})

app.listen(PORT, () => {
  console.log(`Server listening at ${PORT}`)
})
