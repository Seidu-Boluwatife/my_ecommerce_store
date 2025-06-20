import Boxes from '../component/boxes'
//import React from 'react'
import CoverPhoto from "../assets/image/coverPhoto.jpg"
import Button from '../component/button'
//import CartAdded from '../component/cartAdded'
import WhatsAppButton from '../component/watsappButton'
import Footer from '../component/footer'
//import bgImg from '../assets/image/bgImg.png'
//bg-[url('/src/assets/image/bgImg.png')]bg-no-repeat bg-center bg-[length:1000px_1000px]
const Page = () => {
  return (
    <div className="relative w-full  p-20 bg-white ">
      {/* <div className=''> */}
      <div className='mb-20'>
          <p className='text-center text-black text-8xl font-bold mb-5 '>
          She's Essentials
        </p>
        <p className='text-center text-black text-2xl  '>
          Where Comfort Meets Allure
        </p>
      </div>
        

        <div className=' border-2 mb-5 mt-5 border-gray-400'>
          <ul className='flex justify-center gap-14 items-center   text-black'>
            <li className=' cursor-pointer hover:text-amber-900' >Lingerie</li>
            <li className=' cursor-pointer  hover:text-amber-900' >Bra</li>
            <li className=' cursor-pointer  hover:text-amber-900' >Panty</li>
            <li className=' cursor-pointer  hover:text-amber-900' >Sleep Wear</li>
            <li className=' cursor-pointer  hover:text-amber-900' >Binki</li>
            <li className=' cursor-pointer  hover:text-amber-900' >Active Wear</li>
          
    
          </ul>
        </div>

        {/* </div> */}
        <Boxes image={<img src = {CoverPhoto} alt='img' className='w-[50%]   max-h-72'/>}
          label ="V.S Seamless Panties">
            
         {3000}
            <Button className='text-white'>Select Option</Button>
          
            
        </Boxes>
      {/* <CartAdded /> */}
      <WhatsAppButton/>
      <Footer/>
    </div>
  )
}

export default Page