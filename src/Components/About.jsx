import React from 'react'

function About() {
  return (
    <div className='grid grid-cols-3 gap-0 pb-10 px-20'>
        <div className='py-5 px-12'>
            <h4 className='text-primaryColor-500 text-sm'>About Us</h4>
             <p className='font-extrabold text-2xl '>We Offer creative working <br /> environments that suits your <br />business</p>
        </div>
         <div className='border-l-2  h-40 border-primaryColor-500 pb-5 mx-auto'></div>
         <div className=''><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde repellendus sed experferendis distinctio ut placeat,  <br /> consectetur tempora a doloribus cum cumque repudiandae iste officiis? 
         Blanditiis totam possimus voluptates magni!</p>
         <p className='text-primaryColor-500 text-sm pt-3'>More About Us</p>
         </div>
         
      
    </div>
  )
}

export default About
