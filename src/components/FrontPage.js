import React from 'react';

function FrontPage() {
  return (
      <header className='header'>
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
      </header>
  )
}

export default FrontPage;