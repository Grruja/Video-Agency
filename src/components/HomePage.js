import React from 'react'

function HomePage() {
  return (
      <header className='home_page text-bg-dark'>

        <div className='bg_img w-100'>
          <div className='gradient'>
            <div className='home_content d-flex align-items-center justify-content-between m-auto'>

              <div className='name_text text-end'>
                <h3 className='fw-bold'>The<span>od</span>ore</h3>
                <button className='contact_btn mt-3 border-0 text-white fw-bold rounded-pill px-4 py-2'>Contact me</button>
              </div>

              <div className='job_text'>
                <h3 className='fw-bold mb-4'>I'm a <span>voice over</span> specialist</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>

            </div>
          </div>
        </div>

      </header>
  )
}

export default HomePage