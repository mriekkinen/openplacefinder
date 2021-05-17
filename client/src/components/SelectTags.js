import React from 'react'
import AsyncSelect from 'react-select/async'

const SelectTags = ({ loadOptions }) => (
  <AsyncSelect
    defaultOptions
    isClearable
    isMulti
    loadOptions={loadOptions} />
)

export default SelectTags
