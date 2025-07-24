import React from 'react'
import cafestudying from '../assets/cafestudying.jpeg'

function Mission() {
  return (
    <div>
      <div className='flex flex-col items-center text-center  py-40 sm:h-45 md:h-[20vh]  ' style={{backgroundImage: `url(${cafestudying})`, backgroundSize:'cover',
     backgroundPosition:'center',backgroundRepeat:'no-repeat',height:'60vh'}}>
        <h1 className='font-bold text-white' ><span className='text-primaryColor-500'>Our</span>Mission</h1>
        <p className='items-center text-white font-bold '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo numquam eius fugiat expedita aliquam,<br /> architecto, nemo nam dolorum accusantium perspiciatis, libero delectus officiis at ad minima <br />qui repellendus eveniet a.</p>
       <div className='grid grid-cols-2 gap 4 justify-between pt-6'>
         <hr className='border-t-5 border-primaryColor-500 w-15 rounded-md items-center mx-{2} pr-7 '/>
        
         <hr className='border-t-5 border-white w-15 rounded-md items-center mx-auto  ml-4'/>
       </div>
     </div>
    </div>
  )
}

export default Mission
