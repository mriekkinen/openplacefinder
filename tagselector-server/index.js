const express = require('express')
const cors = require('cors')
const DAO = require('./dao')
const { split } = require('./utils/search-util')
const { getIconPath } = require('./enumerate-icons')

const PORT = 3001
const DB_PATH = './data/server.db'
const DB_MASTER_PATH = './data/taginfo/taginfo-master.db'
const DB_WIKI_PATH = './data/taginfo/taginfo-wiki.db'

const SEARCH_LIMIT = 25
const PUBLIC_DIR = '../client/public'

const app = express()
app.use(cors())
app.use(express.json());

const dao = new DAO(SEARCH_LIMIT)

try {
  (async () => {
    await dao.open(DB_PATH, DB_MASTER_PATH, DB_WIKI_PATH)
    console.log('Opened all databases')
  })()
} catch (err) {
  console.error('FAILED to open or attach a database')
  console.error(err)
}

(async () => {
  await dao.populate()
  console.log('Populated tables for suggestions')

  const tags = await dao.getTags()
  for (const tag of tags) {
    const iconPath = await getIconPath(PUBLIC_DIR, tag)
    await dao.updateIcon(tag, iconPath)
  }

  console.log('Enumerated map icons')
  console.log('OK: Completed preprocessing')
})()

app.get('/api/search', async (req, res) => {
  try {
    const query = req.query.q.trim()

    //if (query.length < 2) return res.json([])

    let { key, value } = split(query)
    if (value === '*') value = null

    const rows = await dao.search(key, value)

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
