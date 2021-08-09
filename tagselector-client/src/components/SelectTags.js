import React from 'react'
import AsyncSelect from 'react-select/async'

const TagIconPlaceholder = () => (
  <div className='option-icon'></div>
)

const TagIcon = ({ tag }) => {
  return (tag.icon
    ? <img
        className='option-icon'
        alt=''
        src={tag.icon} />
    : <TagIconPlaceholder />
  )
}

const formatOptionLabel = ({ tag, value, label }, { context }) => {
  if (context === 'value') {
    return (
      <div>{label}</div>
    )
  }

  return (
    <div className='option-container'>
      <div className='option-icon-container'>
        <TagIcon tag={tag} />
      </div>
      <div className='option-content'>
        <div className='option-title'>
          {label}
        </div>
        <div className='option-description'>
          {tag.description}
        </div>
      </div>
    </div>
  )
}

const SelectTags = ({ loadOptions }) => (
  <AsyncSelect
    defaultOptions
    isClearable
    isMulti
    loadOptions={loadOptions}
    formatOptionLabel={formatOptionLabel} />
)

export default SelectTags
