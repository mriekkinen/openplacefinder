const sqlite3 = require('sqlite3')

let db

const open = (filename, mode) => {
  return new Promise((resolve, reject) => {
    db = new sqlite3.Database(filename, mode, (err) => {
      err ? reject(err) : resolve()
    })
  })
}

const run = (sql, ...params) => {
  return new Promise((resolve, reject) => {
    db.run(sql, ...params, (err) => {
      err ? reject(err) : resolve()
    })
  })
}

const all = (sql, ...params) => {
  return new Promise((resolve, reject) => {
    db.all(sql, ...params, (err, rows) => {
      err ? reject(err) : resolve(rows)
    })
  })
}

module.exports = {
  open, run, all
}
