import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/search'

const search = async (query) => {
  const response = await axios.get(`${baseUrl}?q=${query}`)
  return response.data
}

const searchService = {
  search
}

export default searchService
