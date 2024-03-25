import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { emptyCart, removeFromCart } from '../Redux/Slices/cartSlice';
import { useNavigate } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';




function Cart() {


  // custom hooks
  const [totalPrice,setTotal]= useState(null)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // function to access the state
  const cartArray = useSelector((state) => state.cartReducer)
  console.log(cartArray);

  // total price


  const getTotal=()=>{
    if (cartArray.length>0) {
      setTotal(cartArray.map((item)=>item.price).reduce((p1,p2)=>p1+p2))
    } else {
      setTotal(0)
    }
  }


  //to get total price at the time of page load and when cart is open 
  useEffect(()=>{
    getTotal()
  },[cartArray])

  console.log(totalPrice);


  const checkOut =()=>{
   alert("Your Order Has been Placed Successfully")
    dispatch(emptyCart())
    navigate('/')
  }


  return (

    <>

      <h1 className='text-center mt-5 text-warning'>Cart</h1>

      {cartArray?.length > 0 ?
        <div className='row mt-5'>

          <div className="col-md-8 p-5 d-flex justify-content-center align-items-center">
            <table className='table shadow' style={{ overflowX: 'auto' }}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>Action</th>

                </tr>
              </thead>
              <tbody>
                {cartArray.map((product, index) => (<tr>
                  <td>{index + 1}</td>
                  <td>{product.title}</td>
                  <td><img style={{ width: '150px', height: '150px' }} src={product.image} alt="" /></td>
                  <td>₹ {product.price}</td>
                  <td><button onClick={() => dispatch(removeFromCart(product.id))} style={{ color: 'Crimson' }} className='btn '><FontAwesomeIcon icon={faTrashCan} /></button></td>
                </tr>))

                }
              </tbody>
            </table>
          </div>


          <div className="col-md-4 p-5 ">
            <div className='shadow p-4'>
              <h3>Cart Summary</h3>
              <h5>Total Number of Products: <span className='text-warning'> {cartArray.length}</span></h5>
              <h5>Total Price: <span className='text-warning'>₹{totalPrice}</span></h5>
              <button onClick={checkOut} className='btn btn-success mt-4 w-100'>CHECKOUT</button>
            </div>
          </div>

        </div>

        :
        <div className='row  justify-content-center align-items-center text-align-center mt-5 '>
          <div className="col-md-2"></div>

          <div className="col-md-10  justify-content-center align-items-center text-align-center ">
          
            <img className='rounded justify-content-center align-items-center text-align-center' src="https://schoolville.com/assets/img/empty-cart-illustration.gif" alt="cart" />

            <h2 className='m-2 justify-content-center align-items-center text-align-center '> Ooops ...Your Cart is Empty</h2>
          </div>


          <div className="col-md-2"></div>
        </div>
      }

    </>

  )
}

export default Cart