import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart,faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header()

{

const wishlistArray = useSelector((state)=>state.wishlistReducer)
console.log(wishlistArray);

const cartArray = useSelector((state)=>state.cartReducer)
console.log(cartArray);


  return (


    <>
    
    <Navbar expand="lg" className="bg-body-tertiary px-5 py-4">
      <Container fluid>

        <Link to={'/'}>    <Navbar.Brand style={{color:'Navy'}} href="#"><FontAwesomeIcon  icon={faCartShopping} shake />Shop-Kart</Navbar.Brand></Link>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav  className="me-auto me-5" style={{ maxHeight: '50px' }}>
         
          <Link to={'/wishlist'}> <Button className='btn btn-success rounded'> <FontAwesomeIcon style={{color:'HotPink'}} className='me-1' icon={faHeart} />Wishlist <Badge className='rounded ms-3' bg="secondary">{wishlistArray.length}</Badge></Button></Link>
          <Link to={'/cart'}><Button className='btn btn-info rounded me-5 ms-5'><FontAwesomeIcon className='me-1' icon={faCartShopping} />Cart <Badge  className='rounded ms-3' bg="secondary">{cartArray.length}</Badge></Button></Link>
      

          </Nav>
       
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </>
  )
}

export default Header