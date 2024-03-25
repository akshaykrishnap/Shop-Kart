import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Card,Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart,faCartShopping } from '@fortawesome/free-solid-svg-icons';
import useFetch from '../Hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addToWishList } from '../Redux/Slices/WishlistSlice';
import { addtoCart } from '../Redux/Slices/cartSlice';


function Home() {

const dispatch = useDispatch()


const data = useFetch('https://fakestoreapi.com/products')
console.log(data);



  return (


    <>

    <Row className='mt-5 pt-5'>

     {data?.length>0?
      data.map(product=>(
        <Col className='mb-5 p-5' sm={12} md={6} lg={4} xl={4}>
        <Card style={{ width: '100%' }} className='rounded'>
        <Card.Img style={{width:'100%',height:'180px'}} variant="top" src={product.image} />
        <Card.Body>
          <Card.Title style={{color:'navy',fontSize:'25px'}}>{product.title.slice(0,20)}</Card.Title>
          <Card.Text>
           {product.description.slice(0,50)}
            <p>₹{product.price}</p>
          </Card.Text>
          <Button onClick={()=>dispatch(addtoCart(product))} className='rounded' variant="outline-danger"><FontAwesomeIcon style={{color:'blue'}} icon={faCartShopping} /></Button>
          <Button onClick={()=>dispatch(addToWishList(product))} className='ms-2 rounded'  variant="outline-success"><FontAwesomeIcon style={{color:'HotPink'}} className='me-1' icon={faHeart}  /></Button>
        </Card.Body>
      </Card>
        </Col>
      ))
   
      :<p className='mt-5 text-info fs-3'>Loading...</p>

}
    </Row>

    </>
  )
}

export default Home