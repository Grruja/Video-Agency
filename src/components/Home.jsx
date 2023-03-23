import React from 'react'
import '../components/home.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

function Home() {
  return (
    <header>
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
                        <a href="https://github.com" target="/"><FaGithub/></a>
                        <a href="https://dribbble.com" target="/"><FiDribbble/></a>
                    </div>

                    <a href="/" className='scroll_down'>Scroll Down</a>

                </div>
            </div>
        </div>
    </header>
  )
}

export default Home