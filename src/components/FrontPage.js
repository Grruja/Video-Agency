import React from 'react';

function FrontPage() {
  return (
      <header className='header'>
        <div className='front_page m-auto'>
          <nav className='navbar navbar-expand py-3'>
            <a href="/" className='navbar-brand me-auto'>ALEE<span className='brand_span'>XX</span></a>
            <ul className='navbar-nav me-auto gap-5'>
              <li className='nav-item'>
                <a href="/" className='nav-link'>Chi sono</a>
              </li>
              <li className='nav-item'>
                <a href="/" className='nav-link'>Cosa faccio</a>
              </li>
              <li className='nav-item'>
              <a href="/" className='nav-link'>Progetti</a>
              </li>
            </ul>
            <button className='contact_btn rounded-pill'>Contattami</button>
          </nav>

          <div className='header_container_text m-0'>
            <h1 className='header_main_text'>Ciao! Io sono <span>Alessandro</span>.</h1>
            <p className='header_paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            numquam blanditiis.</p>
          </div>
        </div>
      </header>
  )
}

export default FrontPage;