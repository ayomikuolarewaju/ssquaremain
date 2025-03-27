'use client'
import Form from '@/components/Form'
import Points from '@/components/Points'
import React from 'react'



function Contact() {
  return (
    <div className=" bg-white w-full">
      <div>
        <Points
          title='We Are Providing Best Business Service' 
          describe='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
          call='contact us'
          />
      </div>
      <div>
        <Form/>
      </div>
    </div>
  )
}

export default Contact