import React from 'react'
import Cards from './Cards/Cards'

function Offer() {
  return (
    <div className='flex flex-col items-center text-center  py-20'>
      <p className='font-extrabold text-2xl'>We Offer creative working <br />environments</p>
      <p className='text-center font-normal'>find your perfect workspace. Choose from versatile options <br /> tailored to your needs</p>
      <Cards/>
      <div className='grid grid-cols-2 gap-3'>
        <div className='w-3 h-3 border-primaryColor-600 rounded-full mb-2 border-2 bg-primaryColor-500'></div>
        <div className='w-3 h-3 border-primaryColor-400 rounded-full mb-2  border-2'></div>
      </div>
    </div>

  )
}

export default Offer
