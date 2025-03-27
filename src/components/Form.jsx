

import { formServer } from '@/formserver/action';
import React, { useActionState } from 'react'



function Form() {
    const [message, formAction, isPending] = useActionState(formServer, null);
   

  return (
      <div className='w-full  px-4 sm:px-8 md:px-16 xl:px-32 2xl:px-64 flex flex-col justify-center gap-y-[60px] text-white gap-3 items-center pt-[20px] pb-[20px]'>
          
          <div className="flex w-full justify-start items-center h-[100px] p-5">
              <h1 className="md:text-[70px] text-black font-bold">contact us</h1>
              <p className='text-black md:border-b-4 w-[400px] border-black'></p>
          </div>

          <form action={formAction} method='POST' className='flex flex-col w-1/2 gap-y-5'> 
                  <input className='p-3 rounded-lg bg-transparent ring-2 ring-[#B3973D] text-black' type="text"  placeholder="Enter Your fullName" name="fullname"/>
                  <input className='p-3 rounded-lg bg-transparent ring-2 ring-[#B3973D] text-black' type="email"  placeholder="Enter Your Email" name="email"/>
                  <input className='p-3 rounded-lg bg-transparent ring-2 ring-[#B3973D] text-black' type="text" placeholder="Phone" name="phone"/>
                  <button type='submit' className='cursor-pointer p-3 rounded-lg bg-[#B3973D] text-white font-bold text-center ring-2 ring-[#B3973D]'>Subscribe</button>
                  <p className='text-black font-bold text-center text-[25px] capitalize'>{isPending ? "Loading..." : message}</p>
              </form>
      </div>
  )
}

export default Form