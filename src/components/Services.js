import React from 'react'
import IconOne from '../img/service_one.png';
import IconTwo from '../img/service_two.png';
import IconTree from '../img/service_tree.png';

function Services() {
  return (
    <div className='services_page position-relative w-100'>
        <div className='services_content text-white m-auto position-absolute'>

            <div className='text-center w-50 m-auto'>
                <h3 className='color fw-bold mb-5'>Services</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className='card_container d-flex'>

                <div className='card_custom card p-5 border-0'>
                    <div className='h-100 d-flex justify-content-center align-items-center'>
                        <img src={IconOne} alt='img' className='card-img-top w-25'></img>
                    </div>
                    <div className='card-body mt-4'>
                        <h3 className='color card-title text-center mb-4'>Voice over</h3>
                        <p className='card-text text-center fw-lighter'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem.</p>
                    </div>
                </div>

                <div className='card_custom card p-5 border-0 bg-dark rounded-0'>
                    <div className='h-100 d-flex justify-content-center align-items-center'>
                        <img src={IconTwo} alt='img' className='card-img-top w-25'></img>
                    </div>
                    <div className='card-body mt-4'>
                        <h3 className='color card-title text-center mb-4'>Content voice over</h3>
                        <p className='card-text text-center fw-lighter'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem.</p>
                    </div>
                </div>

                <div className='card_custom card p-5 border-0'>
                    <div className='h-100 d-flex justify-content-center align-items-center'>
                        <img src={IconTree} alt='img' className='card-img-top w-25'></img>
                    </div>
                    <div className='card-body mt-4'>
                        <h3 className='color card-title text-center mb-4'>Audiobook</h3>
                        <p className='card-text text-center fw-lighter'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem.</p>
                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Services