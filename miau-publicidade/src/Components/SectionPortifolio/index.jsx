import React from 'react'
import './sectionPortifolio.css'
import TitleSection from '../TitleSection'
import CardIcons200x from '../CardIcons200x'
import CardIcons100x from '../CardIcons100x'

function SectionPortifolio ( props ) {
  return (
    <>
      <TitleSection title="Ajudamos aumentar seu engajamento" />
      <section className='section-container'>
        <div className='section-content'>
          <div className='card-icons-200x-container'>
            <div className='card-icons-200x-left'>
              <div className='col-left'>
                <CardIcons200x />
                <CardIcons200x />
              </div>
              <div className='col-righ'>
                <CardIcons200x />
                <CardIcons200x />
              </div>
            </div>
            <div className='card-icons-200x-right'>
              <div className='left'>
                <CardIcons100x />
              </div>
              <CardIcons100x />
              <div className='left'>
                <CardIcons100x />
              </div>
              <CardIcons100x />
            </div>
          </div>
        </div>
      </section>
    </>    
  )
}

export default SectionPortifolio