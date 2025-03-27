'use client'
import Points from '@/components/Points'
import Showcase from '@/components/Showcase'
import React from 'react'


function About() {
  return (
    <div className="  bg-white w-full">
      <div>
        <Showcase/>
      </div>
      <div>
        <Points
          title='We Are Providing Best Business Service' 
          describe='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
          call='contact us'
          />
      </div>
    </div>
  )
}

export default About