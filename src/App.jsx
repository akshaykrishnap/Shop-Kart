import './App.css'
import './Components/Header'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Wishlist from './Pages/Wishlist'

function App() {
 



  return (

    
    <>

<Header/>


<Routes>

<Route path='/' element={<Home/>}/>
<Route path='/wishlist' element={<Wishlist/>}/>
<Route path='/cart' element={<Cart/>}/>

</Routes>


<Footer/>

    </>


  )
}

export default App
