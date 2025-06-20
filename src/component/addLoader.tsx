import React ,{ useEffect, useState } from 'react'

//import { Loader } from 'lucide-react'
const AddLoader = () => {
    const [text,setText] =useState('')
    const [showImg,setShowImg]= useState(true)
     useEffect(() => {
            setTimeout(()=>{
                setShowImg(false)
                setText(
                    'waited 3 sec ,did it spin'

                )
                
            },3000)

        },[])
  return (
    <div>
        {
            showImg ?(
                <img src='/loader.gif' alt="" />
            ):(
                <h3>
                    {text}
                </h3>
            )
        }
       
    </div>
  )
}

export default AddLoader