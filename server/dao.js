const sqlite3 = require('sqlite3')
const db = require('./db')
const { beginsWith } = require('./utils/search-util')

const ATTACH = 'ATTACH DATABASE ? AS ?'

const DROP_SEARCH = `
  DROP TABLE IF EXISTS suggestions2
`

const CREATE_SEARCH = `
  CREATE TABLE suggestions2 (
    key         TEXT COLLATE NOCASE,
    value       TEXT COLLATE NOCASE,
    description TEXT COLLATE NOCASE,
    icon        TEXT,
    has_icon    INTEGER AS (icon IS NOT NULL) STORED
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
    SELECT key, value, description, icon
      FROM suggestions2
     WHERE key LIKE ?
        OR value LIKE ?
  ORDER BY has_icon DESC, key ASC, value ASC
     LIMIT ?
`

const SEARCH_BY_VALUE = `
    SELECT key, value, description, icon
      FROM suggestions2
     WHERE value LIKE ?
  ORDER BY has_icon DESC, key ASC, value ASC
     LIMIT ?
`

const SEARCH_BY_KEY_AND_VALUE = `
    SELECT key, value, description, icon
      FROM suggestions2
     WHERE key = ?
       AND value LIKE ?
  ORDER BY has_icon DESC, key ASC, value ASC
     LIMIT ?
`

const SELECT_TAGS = `
  SELECT key, value
    FROM suggestions2
   WHERE value IS NOT NULL
`

const UPDATE_ICONS = `
  UPDATE suggestions2
     SET icon = ?
   WHERE key = ?
     AND value = ?
`

class DAO {
  constructor(searchLimit) {
    this.searchLimit = searchLimit
  }

  async open(serverPath, masterPath, wikiPath) {
    await db.open(serverPath, sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE)
    await db.run(ATTACH, masterPath, 'master')
    await db.run(ATTACH, wikiPath, 'wiki')
  }

  async populate() {
    await db.run(DROP_SEARCH)
    await db.run(CREATE_SEARCH)
    await db.run(POPULATE_SEARCH)
  }

  async getTags() {
    return await db.all(SELECT_TAGS)
  }

  async updateIcons(iconPath, tag) {
    await db.run(
      UPDATE_ICONS,
      iconPath,
      tag.key,
      tag.value
    )
  }

  async search(key, value) {
    if (!value) {
      return await db.all(
        SEARCH_BY_KEY_OR_VALUE,
        beginsWith(key),
        beginsWith(key),
        this.searchLimit
      )
    }

    if (!key) {
      return await db.all(
        SEARCH_BY_VALUE,
        beginsWith(value),
        this.searchLimit
      )
    }

    return await db.all(
      SEARCH_BY_KEY_AND_VALUE,
      key,
      beginsWith(value),
      this.searchLimit
    )
  }
}

module.exports = DAO
