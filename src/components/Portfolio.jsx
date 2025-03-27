import React, { useState } from 'react'
import Image from '../../node_modules/next/image'
import img1 from '/images/img-9.png'
import img2 from '/images/img-10.png'
import img3 from '/images/img-11.png'
import img4 from '/images/img-12.png'
import img5 from '/images/img-13.png'
import img6 from '/images/img-14.png'



function Portfolio() {
    const menu = [
    {
        img:img1
    },
     {
        img:img2
    },
      {
        img:img3
        },
       {
        img:img4
        },
        {
        img:img5
        },
         {
        img:img6
    }
]
     let [no,setNo] = useState(0)
   
       const increaseno = (a) => {
           if (no === 0 && no >= menu.length) {
               no = no + 1
               setNo(a)
               console.log(a)
           } else {
               no = 0
               setNo(a)
              }
           
       }

  return (
      <div className='bg-white w-full h-full pt-[20px] '>
           <div className='w-full  px-4 sm:px-8 md:px-16 xl:px-32 2xl:px-64 flex flex-col justify-center gap-y-[60px] text-white gap-3 items-start'>
          <div className="flex w-full justify-start items-center h-[100px] p-5">
              <h1 className="md:text-[70px] text-[30px] text-black font-bold">Our Work Portfolio</h1>
              <p className='text-black border-b-4 w-[400px] border-black'></p>
          </div>
          
          <div className='grid 2xl:grid-cols-3 gap-x-[70px] gap-y-[20px] w-full '>
              {
              menu.map((m, index) => (
                  <div className=' cursor-pointer w-full h-full justify-center' key={index}  onClick={()=>increaseno(index)}>
                      {
                          no === index ?
                              (<div className=' md:w-[400px] h-[300px] rounded-md bg-[#420606] '>
                                  {/* <Image alt='image' src={m.img} className='w-[400px] h-[300px]'/> */}
                              </div>)
                              :
                                   (<div className=' md:w-[400px] h-[300px] rounded-md'>
                                      <Image alt='image' src={m.img} className='md:w-[400px] h-[300px]'/>
                                  </div>)
                                  
                            
                      }
                  </div>
              ))
          }
          </div>
      
    </div>
     </div>
  )
}

export default Portfolio