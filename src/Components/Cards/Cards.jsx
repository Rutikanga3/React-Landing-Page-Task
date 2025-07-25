import React from 'react'
import officeforrent from '../../assets/officeforrent.jpeg'
import coffee from '../../assets/coffee.jpeg'
import privateplace from '../../assets/privateplace.jpeg'

function Cards() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 '>
        <div className='border-2 rounded-md  m-4 w-full max-w-sm pb-6 shadow-md border-primaryColor-50 overflow-x-hidden'>
            <img src={officeforrent} alt="office for rent Image" className='w-full h-60 object-cover rounded-t-md '/>
            <h3 className='text-primaryColor-500 font-bold text-lg text-center mt-4'>Renting Offices</h3>
            <hr className='border-t-2 border-primaryColor-500 w-16 mx-auto mt-2 '/>
            <p className='text-center px-4 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, quibusdam?</p>
            <h5 className='items-center text-center text-primaryColor-500 font-bold mt-4'><span className='text-primaryColor-500 cursor-pointer hover:underline '>Learn More</span></h5>
        </div>
       <div className='border-2 rounded-md mx-auto my-2 w-full max-w-sm pb-6 shadow-md border-primaryColor-50 overflow-x-hidden'>
            <img src={coffee} alt="office for rent Image" className='w-full h-60 object-cover rounded-t-md '/>
            <h3 className='text-primaryColor-500 font-bold text-lg text-center mt-4'>Coffee Shop</h3>
            <hr className='border-t-2 border-primaryColor-500 w-16 mx-auto mt-2 '/>
            <p className='text-center px-4 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, quibusdam?</p>
            <h5 className='items-center text-center text-primaryColor-500 font-bold mt-4'><span className='text-primaryColor-500 cursor-pointer hover:underline '>Learn More</span></h5>
        </div>
        <div className='border-2 rounded-md mx-auto my-2 w-full max-w-sm pb-6 shadow-md border-primaryColor-50 overflow-x-hidden'>
            <img src={privateplace} alt="office for rent Image" className='w-full h-60 object-cover rounded-t-md '/>
            <h3 className='text-primaryColor-500 font-bold text-lg text-center mt-4'>Private Event Space</h3>
            <hr className='border-t-2 border-primaryColor-500 w-16 mx-auto mt-2 '/>
            <p className='text-center px-4 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, quibusdam?</p>
            <h5 className='items-center text-center text-primaryColor-500 font-bold mt-4'><span className='text-primaryColor-500 cursor-pointer hover:underline '>Learn More</span></h5>
        </div>
      
    </div>
  )
}

export default Cards
