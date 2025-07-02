import { useState } from 'react'
import NavBar from './component/navBar'
import ItemProvider from './context/context'
import CartAdded from './component/cartAdded'
import { Toaster } from 'react-hot-toast'
import { Routes, Route } from 'react-router-dom'
import Page from './pages/page'
import AboutUs from './pages/aboutUs' // Create this component
//import MoreInfo from './component/moreInfo'
import Shop from './pages/shop'
//import Header from './component/header'

const App = () => {
  const [openCart, setOpenCart] = useState(false)

  return (
    <ItemProvider>
     
      
      <NavBar setOpenCart={setOpenCart} />
      {openCart && <CartAdded setOpenCart={setOpenCart} />}

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/cart" element={<CartAdded />} />
        <Route path="/shop" element={<Shop />} />

        {/* <Route path="/moreinfo" element={<MoreInfo />} /> */}

      </Routes>

      {/* <AddLoader /> */}
      <Toaster position="top-right" reverseOrder={false} />
    </ItemProvider>
  )
}

export default App
