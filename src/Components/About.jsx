import React from 'react'

function About() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-y-6 sm:gap-0 pb-10 px-4 sm:px-10 lg:px-20'>
        <div className='py-5 px-4 sm:px-12 text-center sm:text-left'>
            <h4 className='text-primaryColor-500 text-sm sm:text-base'>About Us</h4>
             <p className='font-extrabold text-lg sm:text-xl lg:text-2xl mt-2'>We Offer creative working <br /> environments that suits your <br />business</p>
        </div>
         <div className='border-l-2 h-20 sm:h-40 border-primaryColor-500 mx-auto'></div>
         <div className='px-4 sm:px-0 text-center sm:text-left'><p className='text-sm sm:text-base leading-relaxed'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde repellendus sed experferendis distinctio ut placeat,  <br /> consectetur tempora a doloribus cum cumque repudiandae iste officiis? 
         Blanditiis totam possimus voluptates magni!</p>
         <p className='text-primaryColor-500   sm:text-base  text-sm pt-3'>More About Us</p>
         </div>
         
      
    </div>
  )
}

export default About
