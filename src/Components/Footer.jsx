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
    <hr className='border-t-2 border-primaryColor-300 ml-20 w-320  pb-5' />
    <div className='flex flex-co-3 gap-68  px-20'>
    <div className='pb-20'>
        <p className='font-bold text-lg'><RiDashboardLine/>Business<span className='text-primaryColor-500'>Cafe</span></p>
    <p className='pb-3'>Discover your ideal workspace with us. work <br />smart not hard in our fully-equiped office <br />spaces.</p>
    <div className='inline-flex gap-3 text-primaryColor-500 font-bold'>
        <SlSocialFacebook/>
        <FaXTwitter/>
        <SlSocialLinkedin/>
        <FaInstagram/>


    </div>
    </div>
    <div>
        <h2 className='font-extrabold text-xl pb-1'>Quick Links</h2>
        <hr className='bg-gradient-to-r from-primaryColor-500 to-black-300 border-0   h-0.5 border-t-1 w-30  rounded-md '/>
        <ul>
            <li>Home</li>
            <li>Space</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </div>
    <div>
        <h2 className='font-extrabold text-xl pb-1'>contact Info</h2>
        <hr className='bg-gradient-to-r from-primaryColor-500 to-black-300 border-0 h-0.5 border-t-1 w-30pb-10 rounded-md'/>
        <p><span className='font-bold'>Location:</span>Kigali,<span className='text-primaryColor-500'>Rwanda</span></p> 
        <p><span className='font-bold'>Email:</span>businesscafe@info.com</p>
        <p><span className='font-bold'>Phone:</span>+250780750882</p>
        <a href="https://www.google.com/maps"  className='text-primaryColor-500'>View Location on GoogleMap</a>
    </div>

      
    </div>
    <hr className='border-t-2 border-primaryColor-300 ml-20 w-320 pt-5 ' />
    <div className='flex items-center gap-2 ml-140 pb-4'>
        <p>copyright</p>
       <MdOutlineCopyright/> 
       <p>2023 Business Coffee All rights reserved</p>
    </div>
    </div>
  )
}

export default Footer
