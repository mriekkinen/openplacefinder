import React from 'react'
import searchService from './services/search'
import './App.css'
import SelectTags from './components/SelectTags'

const App = () => {
  const filterTags = async (query) => {
    const tagObjects = await searchService.search(query)
    return tagObjects.map(tag => {
      const value = tag.key + '=' + (tag.value ? tag.value : '*')
      return {
        value,
        label: value
      }
    })
  }

  return (
    <div className='main-container'>
      <h2>Search points of interest</h2>
      <div className='select-tags'>
        <SelectTags
          loadOptions={filterTags} />
      </div>
    </div>
  )
}

export default App
