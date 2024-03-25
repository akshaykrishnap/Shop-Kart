import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Card,Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping,faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWishlist } from '../Redux/Slices/WishlistSlice';
import { addtoCart } from '../Redux/Slices/cartSlice';



function Wishlist() {

  const dispatch = useDispatch()

  const wishlistArray = useSelector((state)=>state.wishlistReducer)
  console.log(wishlistArray);

  const handleCart = (item)=>{
    dispatch(removeFromWishlist(item.id))
    dispatch(addtoCart(item))
  }

    
  return (



    <>
    <h1 style={{color:'AliceBlue'}} className='text-center mt-5 '>WishList</h1>
  
{  wishlistArray?.length>0?
  <Row className='mt-5 pt-5'>

{wishlistArray.map((product)=>(
  <Col className='mb-5 p-5' sm={12} md={6} lg={4} xl={4}>
<Card style={{ width: '100%' }} className='rounded'>
<Card.Img style={{width:'100%',height:'180px'}} variant="top" src={product.image} />
<Card.Body>
  <Card.Title style={{color:'navy',fontSize:'25px'}}>{product.title}</Card.Title>
  <Card.Text>
  {product.description.slice(0,50)}
            <p>₹{product.price}</p>
  </Card.Text>
  <Button onClick={()=>dispatch(removeFromWishlist(product.id))} className='rounded' variant="outline-danger"><FontAwesomeIcon icon={faTrashCan} /></Button>
  <Button onClick={()=>handleCart(product)} className='ms-2 rounded'  variant="outline-success"><FontAwesomeIcon style={{color:'blue'}} icon={faCartShopping} /></Button>
</Card.Body>
</Card>
</Col>
))}


</Row>
:
<div className='d-flex justify-content-center align-items-center'>
<img className='m-2' style={{width:'520px',height:'520px'}} src="https://cdnl.iconscout.com/lottie/premium/thumb/empty-shopping-cart-10918209-8825543.gif" alt="" />

<button className='mb-5 btn btn-success'>Back to Home</button>
</div>}

    </>


  )
}



export default Wishlist