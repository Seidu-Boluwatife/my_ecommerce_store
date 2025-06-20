//import type { UseSelector } from 'react-redux'
import { useDispatch ,useSelector } from 'react-redux'
//import { useSelector } from 'react-redux'
import { increment } from '../component/CounterSlice'// Update the path as needed
import { decrement } from '../component/CounterSlice'


 const Counter = () => {
       //const [count,setCount]=useState<number>(1)
    
      //  const {count} = useSelector((state: any) => state.counter.count);  // tis means variable is taken from redux ste,counter ,then thre variable count in counter
     const {count} = useSelector((state: any) => state.counter);  // tis means variable is taken from redux ste,counter ,then thre variable count in counter
    
    
      //call action from reducer
      const dispatch = useDispatch();

//     const cartAdder = () =>{
//     setCount((prev)=>prev+1);
//     console.log(count)
// }
//     //const[counts,setCounts] = useState<number>(1)
//     const handleCartSubtract = ()=> {
//         setCount((prev)=>prev>1?prev-1:1);
//     }


  return (
    <>
      {/* <div> */}
      {/* onClick={cartAdder} */}
      <div onClick={() => dispatch(increment())} className='w-12 h-16 border-1 bg-gray-300 cursor-pointer hover:bg-green-500'>+</div>
      {/* <div onClick={{} => dispatch(decrement())} className='w-12 h-16 border-1 bg-gray-300 cursor-pointer hover:bg-green-500'>decrement</div> */}

      <div className='w-12 h-16 border-1 bg-gray-500 '>
        {count}
      </div>
      <div onClick={()=>dispatch(decrement())} className='w-12 h-16 border-1 bg-gray-300 cursor-pointer hover:bg-green-500'>-</div>


      {/* </div><div className='w-12 h-16 border-1 bg-gray-300 cursor-pointer hover:bg-green-500' >-</div> */}
      {/* onClick={handleCartSubtract} */}
      {/* </div> */}
      {/* </div> */}
    </>
  )
}

export default Counter