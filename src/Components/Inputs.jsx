import React from 'react'

const Inputs = ({ type = 'text', name="", placeholder = '', value, onChange, className}) => {
  return (
    <input
    name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`border border-primaryColor-500 p-2 rounded-md   ${className}`}
    />
  )
}

export default Inputs



