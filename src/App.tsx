import { useState } from 'react'
import NavBar from './component/navBar'
import AddLoader from './component/addLoader'
import ItemProvider from './context/context'
import CartAdded from './component/cartAdded'
import { Toaster } from 'react-hot-toast'
import { Routes, Route } from 'react-router-dom'
import Page from './pages/page'
import AboutUs from './pages/aboutUs' // Create this component

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
      </Routes>

      {/* <AddLoader /> */}
      <Toaster position="top-right" reverseOrder={false} />
    </ItemProvider>
  )
}

export default App
