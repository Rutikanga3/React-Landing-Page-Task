import React from 'react'
import { RiDashboardLine } from "react-icons/ri";
import cafestudying from '../assets/cafestudying.jpeg';
import Buttons from './Buttons/Buttons.jsx';

const Herosection = () => {
  return (
   <div>
     <div className='inline-flex gap-240  bg-white px-5 py-5 '>
        <div className='flex items-center gap-2'>
            <RiDashboardLine className='text-primaryColor-500 text-2xl'/>
            <h1 className='text-2xl'>Business<span className='text-primaryColor-500'>Cafe</span></h1>
            </div>
        <div>
            <ul className='inline-flex  gap-10 font-medium'>
                <li className='text-primaryColor-800 '>Home</li>
                <li>Space</li>
                <li>About</li>
                <li>Contact</li>
                
            </ul>
        </div>
      
    </div>
    <div className='flex flex-col items-center text-center  py-40 ' style={{backgroundImage: `url(${cafestudying})`, backgroundSize:'cover',
     backgroundPosition:'center',backgroundRepeat:'no-repeat'}}>
        <h4 className='text-white font-normal'>The Best Workspace in Kigali</h4><br />
        <p className='font-bold  text-white text-3xl'  ><span className='text-primaryColor-500'>Professional</span>, Creative, <br /> Flexible, Scalable <span className='text-primaryColor-500'>Workspace <br /></span></p><br />
        <p className='items-center text-left text-white/80 font-normal text-md '>Discover your ideal worspace with us. work smart, not hard in our fully-equipped office <br/>spaces. Elavate your business with flexible solutions tailored to your needs find your perfect<br/> office toay!</p>

        <Buttons>Explore</Buttons> 
        

    </div>

    {/* <Buttons/> */}
   </div>
  )
}

export default Herosection
