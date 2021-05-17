const split = (str) => {
  const splitIndex = str.indexOf('=')
  if (splitIndex === -1) {
    return { key: str, value: null }
  }

  let key = str.substring(0, splitIndex)
  let value = str.substring(splitIndex + 1)

  if (key === '') key = null
  if (value === '') value = null

  return { key, value }
}

const beginsWith = (str) => {
  return `${str}%`
}

module.exports = { 
  beginsWith, split
}
