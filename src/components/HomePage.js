import React from 'react'

function HomePage() {
  return (
      <header className='home_page text-bg-dark'>

        <div className='bg_img'>
          <div className='gradient'>
            <div className='home_content d-flex align-items-center justify-content-between m-auto'>

              <div className='name_text text-end ps-4'>
                <h3 className='fw-bold'>The<span className='color'>od</span>ore</h3>
                <button className='contact_btn d-lg-block d-sm-none ms-auto mt-3 border-0 text-white fw-bold rounded-pill px-4 py-2'>Contact me</button>
              </div>

              <div className='job_text pe-4'>
                <h3 className='fw-bold mb-4'>I'm a <span className='color'>voice over</span> specialist</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button className='contact_btn d-lg-none mt-4 border-0 text-white fw-bold rounded-pill px-5 py-3'>Contact me</button>
              </div>

            </div>
          </div>
        </div>

      </header>
  )
}

export default HomePage