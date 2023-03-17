import React from 'react'
import IconOne from '../img/service_one.png';
import IconTwo from '../img/service_two.png';
import IconTree from '../img/service_tree.png';

function Services() {
  return (
    <div className='services_page position-relative w-100'>
        <div className='services_content text-white m-auto position-absolute'>

            <div className='text-center w-50 m-auto'>
                <h3>Services</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className='d-flex gap-5 mt-5'>

                <div className='card text-bg-dark p-5'>
                    <img src={IconOne} alt='img' className='card-img-top w-75 m-auto'></img>
                    <div className='card-body'>
                        <p className='card-text text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem.</p>
                    </div>
                </div>

                <div className='card text-bg-dark p-5'>
                    <img src={IconTwo} alt='img' className='card-img-top w-75 m-auto'></img>
                    <div className='card-body'>
                        <p className='card-text text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem.</p>
                    </div>
                </div>

                <div className='card text-bg-dark p-5'>
                    <img src={IconTree} alt='img' className='card-img-top w-75 m-auto'></img>
                    <div className='card-body'>
                        <p className='card-text text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem.</p>
                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Services