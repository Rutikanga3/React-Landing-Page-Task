import React from 'react'
import Minicards from './Cards/Minicards'


function Services() {
  return (
    <div className='flex flex-col items-center text-center '>
      <h4 className='text-primaryColor-500  font-bold'>Your Benefits</h4>
      <h1 className='font-extrabold text-3xl'>Why Choose Us</h1>
      <p className='pb-12'>Unleash your productivity with our premium workspace solutions.Elavete <br />your work game and join the winning team today.</p>
      
      <Minicards/>
    </div>
  )
}

export default Services
