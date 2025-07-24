import React from 'react'
import Minicards from './Cards/Minicards'


function Services() {
  return (
    <div className='flex flex-col items-center text-center py-10 sm:py-20 '>
      <h4 className='text-primaryColor-500  font-bold text-sm sm:text-base md:text-lg'>Your Benefits</h4>
      <h1 className='font-extrabold text-3xl  sm:text-3xl md:text-4xl mt-2'>Why Choose Us</h1>
      <p className='text-sm sm:text-base md:text-lg mt-4 pb-12 px-4 sm:px-20'>Unleash your productivity with our premium workspace solutions.Elavete <br />your work game and join the winning team today.</p>
      
      <Minicards/>
    </div>
  )
}

export default Services
