import React from 'react'
import './titleSection.css'

function TitleSection ( props )  {
  return (
    <div className='title-section-container'>
        <h2>{props.title}</h2>
    </div>
  )
}

export default TitleSection