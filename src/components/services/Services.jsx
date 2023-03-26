import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

function Services() {
    return (
        <section id='services'>
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container services_container">

                <article className="service">
                    <div className="service_name">
                        <h3>Content Voice Over</h3>
                    </div>

                    <ul className='service_list'>
                        <li>
                            <BiCheck className='service_icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BiCheck className='service_icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BiCheck className='service_icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BiCheck className='service_icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BiCheck className='service_icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BiCheck className='service_icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
                        </li>
                    </ul>
                </article>

                <article className="service">
                    <div className="service_name">
                        <h3>Voice Over</h3>
                    </div>

                    <ul className='service_list'>
                        <li>
                            <BiCheck className='service_icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BiCheck className='service_icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BiCheck className='service_icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BiCheck className='service_icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BiCheck className='service_icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BiCheck className='service_icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BiCheck className='service_icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
                        </li>
                    </ul>
                </article>

                <article className="service">
                    <div className="service_name">
                        <h3>Audiobook</h3>
                    </div>

                    <ul className='service_list'>
                        <li>
                            <BiCheck className='service_icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BiCheck className='service_icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BiCheck className='service_icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BiCheck className='service_icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BiCheck className='service_icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BiCheck className='service_icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
                        </li>
                    </ul>
                </article>

            </div>
        </section>
    )
}

export default Services