import React from 'react'
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import Buttons from './Buttons/Buttons';

function Contact() {
  return (
    <div className='grid grid-cols-2 gap-2 px-20 py-14'>
        <div> 
            <h3 className='text-primaryColor-500 font-bold'>Contact Us</h3>
            <h1 className='font-extrabold text-3xl pb-7'>Say Hello</h1>
            <div className='flex flex-cols-2 gap-3'>
                <div className='bg-primaryColor-500 text-white border-dashed border-primaryColor-500 rounded-full p-3 w-14 text-3xl'>
                    <IoLocation/>
                </div>
                <div>
                    <h2>Address</h2>
                    <p>Location KG 281 Ave, Kigali</p>
                </div>


            </div><br />
             <div className='flex flex-cols-2 gap-3'>
                <div className='bg-primaryColor-500 text-white border-dashed border-primaryColor-500 rounded-full p-3 w-14 text-3xl '>
                    <MdEmail/>
                </div>
                <div>
                    <h2>Email</h2>
                    <p>businesscafe@info.com</p>
                </div>


            </div><br />
             <div className='flex flex-cols-2 gap-3'>
                <div className='bg-primaryColor-500 text-white border-dashed border-primaryColor-500 rounded-full p-3 w-14 text-3xl'>
                    <FaPhoneVolume/>
                </div>
                <div>
                    <h2>Phone</h2>
                    <p>+250780750882</p>
                </div>


            </div>

        </div>
        <div className='mr-30'>
            <h3 className='text-primaryColor-500 font-bold'>Have a Question ?</h3>
            <h1 className='font-extrabold text-3xl pb-7'>Send a Message</h1>
            <form className='flex flex-col gap-4'>
                <input type="text" placeholder='Name' className='border border-primaryColor-500 p-2 rounded-md'/>
                <input type="email" placeholder='Email' className='border border-primaryColor-500 p-2 rounded-md'/>
                <input type="text" placeholder='Subject' className='border border-primaryColor-500 p-2 rounded-md'/>
                <textarea placeholder='  Your Message' className='border border-primaryColor-500 p-2 rounded-md h-32'></textarea>
                {/* <button type="submit" className='bg-primaryColor-500 text-white py-2 rounded-md'>Send Message</button> */}
                <Buttons>Send Message</Buttons>
                

            </form>
        </div>


      
    </div>
  )
}

export default Contact
