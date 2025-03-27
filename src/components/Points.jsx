import React from 'react'
import { useRouter } from '../../node_modules/next/navigation'


function Points({ title, describe, call }) {
    const router = useRouter()
  return (
      <div className="bg-[url('../../images/portfolio-bg.png')] flex flex-col  bg-no-repeat bg-cover h-[500px] w-full px-4 sm:px-8 md:px-16 xl:px-32 2xl:px-64 justify-center text-white gap-3 items-center">
          <h2 className='md:text-[40px] text-[25px] md:w-[450px] text-center text-black font-bold capitalize'>{title}</h2>
          <p className='text-black text-md md:w-[650px]'>{describe}</p>
          <button onClick={()=>router.push('/contact')} className='rounded-lg md:w-[300px] w-[150px] h-[50px] text-white bg-[#420606]'>{ call}</button>
    </div>
  )
}

export default Points