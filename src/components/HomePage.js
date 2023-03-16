import React from 'react';

function HomePage() {
  return (
      <header className='home_page text-bg-dark'>

        <div className='bg_img'>
          <div className='gradient'>
            <div className='home_content d-flex align-items-center justify-content-between m-auto'>

              <div className='name_text w-25'>
                <h3 className='fw-bold float-end'>The<span>od</span>ore</h3>
                <button className='contact_btn mt-3 float-end border-0 text-white fw-bold rounded-pill px-4 py-2'>Contact me</button>
              </div>

              <div className='job_text w-25'>
                <h3 className='fw-bold mb-4'>I'm a <span>voice over</span> specialist</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>

            </div>
          </div>
        </div>

      </header>
  )
}

export default HomePage;