import React from 'react'
import officeforrent from '../../assets/officeforrent.jpeg'
import coffee from '../../assets/coffee.jpeg'
import privateplace from '../../assets/privateplace.jpeg'

function Cards() {
  return (
    <div className='grid grid-cols-3  gap-2 '>
        <div className='border-2 rounded-md  m-10 w-86 pb-12 shadow-2xs border-primaryColor-50'>
            <img src={officeforrent} alt="office for rent Image" className='w-86 h-60 object-cover mx-auto pb-5 '/>
            <h3 className='text-primaryColor-500 font-bold text-md text-center'>Renting Offices</h3>
            <hr className='border-t-3 border-primaryColor-500 w-15 rounded-md items-center mx-auto '/>
            <p className='text-center pt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, quibusdam?</p>
            <h5 className='items-center text-center text-primaryColor-500 font-bold pt-5'><span className='text-primaryColor-500 '>Learn More</span></h5>
        </div>
        <div className='border-2 rounded-md  m-10 w-86 pb-12 shadow-2xs border-primaryColor-50'>
            <img src={coffee} alt="office for rent Image" className='w-86 h-60 object-cover mx-auto pb-5 '/>
            <h3 className='text-primaryColor-500 font-bold text-md text-center'>Coffee Shop</h3>
            <hr className='border-t-3 border-primaryColor-500 w-13 rounded-md items-center mx-auto '/>
            <p className='text-center pt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, quibusdam?</p>
            <h5 className='items-center text-center text-primaryColor-500 font-bold pt-5'><span className='text-primaryColor-500 '>Learn More</span></h5>
        </div>
        <div className='border-2 rounded-md  m-10 w-86 pb-12 shadow-2xs border-primaryColor-50'>
            <img src={privateplace} alt="office for rent Image" className='w-86 h-60 object-cover mx-auto pb-5 '/>
            <h3 className='text-primaryColor-500 font-bold text-md text-center'>Private event Space</h3>
            <hr className='border-t-3 border-primaryColor-500 w-15 rounded-md items-center mx-auto '/>
            <p className='text-center pt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, quibusdam?</p>
            <h5 className='items-center text-center text-primaryColor-500 font-bold pt-5'><span className='text-primaryColor-500 '>Learn More</span></h5>
        </div>
      
    </div>
  )
}

export default Cards
