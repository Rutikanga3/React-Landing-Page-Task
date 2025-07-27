import React,{useState} from 'react'
import { RiDashboardLine } from "react-icons/ri";
import cafestudying from '../assets/cafestudying.jpeg';
import Buttons from './Buttons/Buttons.jsx';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"


const Herosection = () => {
    const[IsOpen, setIsOpen] = useState(false);
  return (
   <div>
     <div className='flex  justify-between items-center w-full md:w-auto bg-white pb-5 '>
        <div className='flex items-center gap-2'>
            <RiDashboardLine className='text-primaryColor-500 text-2xl'/>
            <h1 className='text-xl md:text-2xl'>Business<span className='text-primaryColor-500'>Cafe</span></h1>
            </div>
            <div className='md:hidden'>
                <button onClick={()=> setIsOpen(!IsOpen)}>
                    {IsOpen ? <AiOutlineClose className='text-primaryColor-500 text-2xl'/> : <AiOutlineMenu className='text-primaryColor-500 text-2xl'/>}

                </button>

            </div>

        <div className={`${IsOpen? 'flex':'hidden'} flex-col md:flex-row gap-4 md:gap-10 font-medium md:flex md:items-center mt-4 md:mt-0`}>
            <ul className='flex flex-col md:flex-row gap-4 md:gap-10 font-medium'>
                <li className='text-primaryColor-800 '>Home</li>
                <li>Space</li>
                <li>About</li>
                <li>Contact</li>
                
            </ul>
        </div>
      
    </div>
    <div className='flex flex-col items-center text-center py-20 px-5 sm:py-40' style={{backgroundImage: `url(${cafestudying})`, backgroundSize:'cover',
     backgroundPosition:'center',backgroundRepeat:'no-repeat'}}>
        <h4 className='text-white font-normal text-sm sm:text-base md:text-lg'>The Best Workspace in Kigali</h4><br />
        <p className='font-bold  text-white text-2xl sm:text-3xl md:text-4xl'  ><span className='text-primaryColor-500'>Professional</span>, Creative, <br /> Flexible, Scalable <span className='text-primaryColor-500'>Workspace <br /></span></p><br />
        <p className='items-center text-left text-white/80 font-normal text-sm sm:text-base md:text-lg  max-w-lg  '>Discover your ideal worspace with us. work smart, not hard in our fully-equipped office <br/>spaces. Elavate your business with flexible solutions tailored to your needs find your perfect<br/> office toay!</p>

        <Buttons>Explore</Buttons> 
        

    </div>

    {/* <Buttons/> */}
   </div>
  )
}

export default Herosection
