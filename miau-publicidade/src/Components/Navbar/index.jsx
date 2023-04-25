import React from 'react'
import './navbar.css'
import { BsWhatsapp, BsInstagram, BsFacebook, BsLinkedin, BsTwitter } from 'react-icons/bs'

const Navbar = () => {
  return (
    <nav>
        <div className='navbar-container'>
            <div className='logo32x32'>
                <a href="http://"><img class='' src="" alt="" width={32} height={32}/>Miau Publicidade</a>
            </div>
            <div className='links'>
                <a href="http://">Página Incial</a>
                <a href="http://">Serviços</a>
                <a href="http://">Depoimentos</a>
                <a href="http://">Clientes</a>
                <a href="http://">Equipe</a>
                <a href="http://">Contato</a>
            </div>
            <div className='social-icons'>
                <a class='icon' href="http://"><BsWhatsapp size={24} color='white'/></a>
                <a class='icon' href="http://"><BsFacebook size={24} color='white'/></a>
                <a class='icon' href="http://"><BsInstagram size={24} color='white'/></a>
                <a class='icon' href="http://"><BsTwitter size={24} color='white'/></a>
                <a class='icon' href="http://"><BsLinkedin size={24} color='white'/></a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar