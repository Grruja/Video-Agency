import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {IoLogoTwitter} from 'react-icons/io'
import {BsWhatsapp} from 'react-icons/bs'

function Footer() {
    return (
        <footer>
            <a href="#home" className='footer_logo'>THEODORE</a>

            <ul className='permalinks'>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#clients">Clients</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className='footer_socials'>
                <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
                <a href="https://twitter.com" target="_blank"><IoLogoTwitter/></a>
                <a href="https://whatsapp.com" target="_blank"><BsWhatsapp/></a>
            </div>

            <div className='footer_copyright'>
                <small>&copy; THEODORE</small>
            </div>
        </footer>
    )
}

export default Footer