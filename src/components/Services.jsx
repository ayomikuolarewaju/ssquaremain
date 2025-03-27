import React, { useState } from 'react'
import Image from '../../node_modules/next/image'
import img1 from '/images/img-3.png'
import img2 from '/images/img-4.png'
import img3 from '/images/img-5.png'



function Services() {
    const menu = [
    {
        title:'Consultative Training',
        msg: 'Readable content of a page when looking at its layout. The point of It is a long established fact that a reader will be distracted by the readable',
        img:img1
    },
     {
        title:'Consultative Training',
         msg: 'Readable content of a page when looking at its layout. The point of It is a long established fact that a reader will be distracted by the readable',
        img:img2
    },
      {
        title:'Consultative Training',
          msg: 'Readable content of a page when looking at its layout. The point of It is a long established fact that a reader will be distracted by the readable',
        img:img3
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
              <h1 className="md:text-[70px] text-[30px] text-black font-bold">What We Do</h1>
              <p className='text-black border-b-4 w-[400px] border-black'></p>
          </div>
          
          <div className='2xl:flex w-full md:space-x-10 h-full justify-center items-center '>
              {
              menu.map((m, index) => (
                  <div className=' ' key={index}  onClick={()=>increaseno(index)}>
                      {
                          no === index ?
                              <div className='bg-[#420606] flex mb-[60px] flex-col h-[250px] md:w-[400px] p-5 rounded-md relative cursor-pointer'>
                                  <div className='absolute top-[-50px]'>
                                      <Image alt='image' src={m.img} />
                                  </div>
                                  <div  className='absolute top-[70px] p-4 text-white'>
                                      <div className='text-[25px]'>{m.title}</div>
                                      <div>{m.msg }</div>
                                  </div>
                              </div>
                              :
                              <div className='bg-[#B3973D] flex mb-[60px] flex-col h-[250px] md:w-[400px] p-5 rounded-md relative cursor-pointer'>
                                   <div className='absolute top-[-50px]'>
                                      <Image alt='image' src={m.img} />
                                  </div>
                                  <div  className='absolute top-[70px] p-4 text-black'>
                                      <div className='text-[25px]'>{m.title}</div>
                                      <div>{m.msg }</div>
                                  </div>
                              </div>
                      }
                  </div>
              ))
          }
          </div>
      
    </div>
     </div>
  )
}

export default Services