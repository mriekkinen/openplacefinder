const fs = require('fs/promises')

const getIconPath = async (publicDir, tag) => {
  const { key, value } = tag
  if (!(key && value)) {
    return null
  }

  const iconPath = `${key}/${value}.svg`
  const serverPath = `${publicDir}/symbols/${iconPath}`
  const clientPath = `/symbols/${iconPath}`
  const fileExists = await exists(serverPath)

  if (!fileExists) {
    return null
  }

  return clientPath
}

const exists = async (path) => {
  try {
    await fs.access(path)
    return true
  } catch (err) {
    return false
  }
}

/**
 * TODO: Enumerate icons only once, and save the results to the DB
 */

module.exports = {
  getIconPath
}
