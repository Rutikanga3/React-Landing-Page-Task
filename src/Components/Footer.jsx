import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa6";
import { RiDashboardLine } from "react-icons/ri";
import { MdOutlineCopyright } from "react-icons/md";
function Footer() {
  return (
    <div>
    <hr className='border-t-2 border-primaryColor-300 mx-5 sm:mx-20 pt-5' />
    <div className='grid grid-cols-1 md:grid-cols-3 gap-10 px-5 sm:px-20 pb-10'>
    <div className=''>
        <p className='font-bold text-lg flex items-center gap-2'><RiDashboardLine/>Business<span className='text-primaryColor-500'>Cafe</span></p>
    <p className='pb-3  sm:text-base'>Discover your ideal workspace with us. work <br />smart not hard in our fully-equiped office <br />spaces.</p>
    <div className='flex gap-3 text-primaryColor-500 font-bold'>
        <SlSocialFacebook/>
        <FaXTwitter/>
        <SlSocialLinkedin/>
        <FaInstagram/>


    </div>
    </div>
    <div>
        <h2 className='font-extrabold text-xl pb-1'>Quick Links</h2>
        <hr className='bg-gradient-to-r from-primaryColor-500 to-black-300 border-0   h-0.5 border-t-1 w-30  rounded-md mb-3 '/>
        <ul>
            <li>Home</li>
            <li>Space</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </div>
    <div>
        <h2 className='font-extrabold text-xl pb-2'>contact Info</h2>
        <hr className='bg-gradient-to-r from-primaryColor-500 to-black-300 border-0 h-0.5 border-t-1 w-30pb-10 rounded-md mb-3'/>
        <p className="text-sm sm:text-base"><span className='font-bold'>Location:</span>Kigali,<span className='text-primaryColor-500'>Rwanda</span></p> 
        <p className="text-sm sm:text-base"><span className='font-bold'>Email:</span>businesscafe@info.com</p>
        <p className="text-sm sm:text-base"><span className='font-bold'>Phone:</span>+250780750882</p>
        <a href="https://www.google.com/maps"  className='text-primaryColor-500 text-sm sm:text-base'>View Location on GoogleMap</a>
    </div>

      
    </div>
    <hr className='border-t-2 border-primaryColor-300 mx-5 sm:mx-20 pt-5 ' />
    <div className='flex flex-col sm:flex-row items-center justify-center gap-2 text-sm sm:text-base py-4'>
        <p>copyright</p>
       <MdOutlineCopyright/> 
       <p>2023 Business Coffee All rights reserved</p>
    </div>
    </div>
  )
}

export default Footer
