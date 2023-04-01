import React from 'react'
import './clients.css'
import IMG1 from '../../img/vid.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Audiobook',
  },
  {
    id: 2,
    image: IMG1,
    title: 'Voice Over',
  },
  {
    id: 3,
    image: IMG1,
    title: 'Advertisement',
  }
]

function Clients() {
    return (
        <section id='clients'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio_container">
                {
                    data.map(({id, image, title}) => {
                        return (
                            <article key={id} className='portfolio_item'>
                                <div className="portfolio_item_image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                            </article>
                        )
                    })
                }
            </div>

        </section>
  )
}

export default Clients