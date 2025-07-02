// import React from 'react'
import Products from '../data/product'
import Footer from '../component/footer'
//import WhatsAppButton from '../component/watsappButton'

const Shop = () => {
  return (
    <div>

        
<section id='shop'>
    
      <div className="bg-black text-white  w-full py-3 px-4 mb-10 overflow-x-auto">
        <ul className="flex justify-center gap-14 sm:gap-10 text-xl sm:text-base  font-bold whitespace-nowrap">
          {['PRADA', 'CALVIN KLEIN', 'ZARA ', 'VERSACE', 'GUCCI'].map((item, idx) => (
            <li key={idx} className="cursor-pointer transition-colors duration-200">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <p className='text-3xl text-black font-black text-center ' >
        New Arrival
      </p>

</section>


      <Products />


      {/* Fixed WhatsApp and Footer */}
      {/* <WhatsAppButton /> */}
      <Footer />

    </div>
  )
}

export default Shop