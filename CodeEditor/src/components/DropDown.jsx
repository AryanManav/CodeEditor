import React, { useState } from 'react'
import './DropDown.css'

import { Dropdown } from "flowbite-react"
import { LANGUAGE } from '../lang'

const DropDown = ({ lang, handleClick }) => {
  const languages = Object.entries(LANGUAGE)
  return (
    <>
      <div className='text'><p>Online {lang.toUpperCase()} Compiler</p></div>
      <div className='drop'>
        <div className='down'><Dropdown label={lang} inline>
          {languages.map(([language, version]) => {
            return <Dropdown.Item onClick={() => { handleClick(language) }}>{language}</Dropdown.Item>
          })}
        </Dropdown></div>
      </div>
    </>
  )
}

export default DropDown
