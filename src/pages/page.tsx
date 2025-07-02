// import Products from '../data/product';
import Button from '../component/button'
// import WhatsAppButton from '../component/watsappButton'
import Footer from '../component/footer'
import {Link } from 'react-router-dom'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

// interface pageCounterProps{
//   end:number;
//   duration?:number;
//   suffix?:string;
// }


const Page =() => {
  const{ref,inView} = useInView({
    
    threshold:0.1,

  });
  console.log("in view",inView)
  return (
  <div className="">
      
  <div className="bg-[url('/image/bgImg.jpg')] bg-cover bg-center mt-16 flex items-center justify-start px-4 sm:px-8 lg:px-16  min-h-[200px] sm:min-h-[300px] md:min-h-[400px] lg:min-h-screen">
    <div className="max-w-xl " >
      <img src='/image/star.svg' alt="" className="w-16 h-16 absolute -top-5 right-46 "/>
      <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-1.1">
        FIND CLOTHES THAT MATCH YOUR STYLE
      </h1>
      <p className="text-xs sm:text-base md:text-sm text-gray-700">
        Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
      </p>
      <Link to='/shop'>
        <Button className='mt-3 text-white bg-black '>Shop Now</Button>

      </Link>
      
      <div ref={ref} className='flex flex-row space-x-3  mt-3 gap-4 '>
      <div>
        <p className='font-bold text-4xl '>
          {inView && (    
          <CountUp start={0} 
          end={300}
          duration={4}>

          </CountUp> )}
      
          +</p>
        <p>International Brands</p>
      </div>
      <div>
        <p className='font-bold text-4xl'>
            {inView && (    
          <CountUp start={0} 
          end={2000}
          duration={4}>

          </CountUp> )}+</p>
        <p>High-Quality Products</p>

      </div>
      <div>
        <p className='font-bold text-4xl'>
          
            {inView && (    
          <CountUp start={0} 
          end={3000}
          duration={4}>

          </CountUp> )}+</p>
        <p>Happy Customers</p>
      </div>


    </div>
    </div>
    
  </div>

    <Footer />

</div>
  );
};

export default Page;
