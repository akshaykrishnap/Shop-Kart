import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


function Footer() {
  return (
    <>


      <div className='w-100 justify-content-center align-items-center d-flex' >

        <div className="row " >
          <div className=" website col-md-3  justify-content-center">
            <span style={{ color: 'DarkBlue', fontSize: '30px' }}><FontAwesomeIcon icon={faCartShopping} shake /> Shop-Kart</span><br /><br />
            <span style={{ color: 'DarkBlue', fontSize: '15px' }} >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio vel pariatur est! Minus doloremque eum animi quo, aut harum deserunt tenetur error quibusdam magnam quisquam recusandae, ut veritatis! Unde, officia.</span>
          </div>

          <div className="links col-md-2">
            <h1 style={{ color: 'DarkBlue', fontSize: '30px' }} >Links</h1>
            <div>
              <a href="" className='text-decoration-none'><Link style={{ color: 'DarkBlue' }} to={'/'} >Home</Link> </a><br />
              <a href="" className='text-decoration-none'><Link style={{ color: 'DarkBlue' }} to={'/cart'}>Cart</Link></a><br />
              <a href="" className='text-decoration-none'><Link style={{ color: 'DarkBlue' }} to={'/wishlist'}>Wishlist</Link></a><br />
            </div>
          </div>

          <div className=" Guides  col-md-2">
            <h1 style={{ color: 'DarkBlue', fontSize: '30px' }} >Guides</h1>
            <div>
              <a href="" style={{ color: 'DarkBlue' }} className='text-decoration-none'>React</a><br />
              <a href="" style={{ color: 'DarkBlue' }} className='text-decoration-none'>React Bootstrap</a><br />
              <a href="" style={{ color: 'DarkBlue' }} className='text-decoration-none'>Bootswatch</a><br />
            </div>


          </div>

          <div className="col-md-5 contact">
            <h1 style={{ color: 'DarkBlue', fontSize: '30px' }}>Contact Us</h1><br />
            <div className='d-flex'>
              <input placeholder='EMAIL' className='rounded form-control w-50' type="text" />
              <button className='rounded m-2 btn btn-dark'>Subcribe Now</button> <br />
            </div>
            <div className=" d-flex  col-md-2">
              <a href="" style={{fontSize:'35px'}} className='text-decoration-none m-3'><FontAwesomeIcon icon={faInstagram} /> </a>
              <a href="" style={{fontSize:'35px'}} className='text-decoration-none m-3'><FontAwesomeIcon icon={faFacebook} /> </a>
              <a href="" style={{fontSize:'35px'}} className='text-decoration-none m-3'><FontAwesomeIcon icon={faTwitter} /> </a>
              <a href="" style={{fontSize:'35px'}} className='text-decoration-none m-3'> <FontAwesomeIcon icon={faLinkedin} /> </a>
            </div>
          </div>

        </div>


      </div>

    </>
  )
}

export default Footer