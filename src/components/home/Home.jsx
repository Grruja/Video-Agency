import React from 'react'
import '../home/home.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaTwitter} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'

function Home() {
    return (
        <header id='home'>
            <div className='my_img'>
                <div className='gradient'>
                    <div className='home_container container'>

                        <h5>Hello I'm</h5>
                        <h1>Theodore</h1>
                        <h5 className='text_light'>Voice Over Specialist</h5>

                        <div className='home_btn_container'>
                            <a href="/" className='btn-invert'>See My Work</a>
                            <a href="/" className='btn-invert btn-secondary'>Contact Me</a>
                        </div>

                        <div className='home_socials'>
                            <a href="https://linkedin.com" target="/"><BsLinkedin/></a>
                            <a href="https://twitter.com" target="/"><FaTwitter/></a>
                            <a href="https://whatsapp.com" target="/"><BsWhatsapp/></a>
                        </div>

                        <a href="#contact" className='scroll_down'>Scroll Down</a>

                    </div>
                </div>
            </div>
        </header>
    )
}

export default Home