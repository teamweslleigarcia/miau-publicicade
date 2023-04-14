import React from 'react'
import { BsWhatsapp } from 'react-icons/bs'
import './construcao.css'

const Construcao = () => {
  return (
        <div className='construct'>
            <img class='logo' src="" alt="" />
            <h2>EM CONSTRUÇÃO</h2>
            <p>Estaremos disponível em breve! Entre em contato conosco 👇</p>
            <div className='whatsapp'>
                <BsWhatsapp size={24} color='white' />
                <a href="http://">WhatsApp</a>
            </div>
            
        </div>
  )
}

export default Construcao