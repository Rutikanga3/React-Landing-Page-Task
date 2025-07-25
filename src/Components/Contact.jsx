import React from 'react'
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import Buttons from './Buttons/Buttons';
import { useState } from 'react';
import Inputs from './Inputs';


function Contact() {
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ''
   
  });
    
  const [errors, setErrors]= useState({})

  const handleChange = (event) => {
   const{name,value} = event.target
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));


  };
  console.log(formData)

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = {};

    if (!formData.name.trim()){
      formErrors.name = 'Name is required';
    }
    if (!formData.email.includes('@')){
      formErrors.email = 'Invalid email address';
    }
    if (!formData.subject.trim()){
      formErrors.subject = 'Subject is required';
    }
    if (!formData.message.trim()) {
            formErrors.message = 'Message is required';
        }
    
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setErrors({});
    //   console.log('Form submitted successfully:',formData)
    alert('Form submitted successfully')
    }
  }
  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-6 px-4 sm:px-10 md:px-20 py-10 sm:py-14'>
        <div> 
            <h3 className='text-primaryColor-500 font-bold text-sm sm:text-base'>Contact Us</h3>
            <h1 className='font-extrabold text-2xl sm:text-3xl pb-5'>Say Hello</h1>
            <div className='flex items-center gap-3'>
                <div className='bg-primaryColor-500 text-white border-dashed border-primaryColor-500 rounded-full p-3 w-14 text-3xl'>
                    <IoLocation/>
                </div>
                <div>
                    <h2 className="text-sm sm:text-base">Address</h2>
                    <p className="text-xs sm:text-sm">Location KG 281 Ave, Kigali</p>
                </div>


            </div><br />
             <div className='flex items-center gap-3'>
                <div className='bg-primaryColor-500 text-white  border-primaryColor-500 rounded-full p-3 w-14 text-3xl '>
                    <MdEmail/>
                </div>
                <div>
                    <h2 className="text-sm sm:text-base">Email</h2>
                    <p className="text-xs sm:text-sm">businesscafe@info.com</p>
                </div>


            </div><br />
             <div className='flex items-center gap-3'>
                <div className='bg-primaryColor-500 text-white border-dashed border-primaryColor-500 rounded-full p-3 w-14 text-3xl'>
                    <FaPhoneVolume/>
                </div>
                <div>
                    <h2 className="text-sm sm:text-base">Phone</h2>
                    <p className="text-xs sm:text-sm">+250780750882</p>
                </div>


            </div>

        </div>
        <div className=''>
            <h3 className='text-primaryColor-500 font-bold text-sm sm:text-base'>Have a Question ?</h3>
            <h1 className='font-extrabold text-3xl sm:text-3xl pb-5'>Send a Message</h1>
            <form action= '' className='flex flex-col gap-4' onSubmit={handleSubmit}>
                <Inputs type='text' name='name' placeholder='Name' value={formData.name}  onChange={handleChange}
                  className={`text-grey ${errors.name ? 'focus:ring-red-500 border-red-500' : 'focus:ring-primaryColor-500'}`}/>
                  {errors.name && <span className='text-sm text-red-600  '>{errors.name}</span>}
                <Inputs type='Email' name='email' placeholder='Email'  value={formData.email} onChange={handleChange}   className={`text-grey ${errors.name ? 'focus:ring-red-500 border-red-500' : 'focus:ring-primaryColor-500'}`}/>
                {errors.email && <span className='text-sm text-red-600  '>{errors.email}</span>}
                
                <Inputs type='text' name='subject' placeholder='Subject'  value={formData.subject} onChange={handleChange}  className={`text-grey ${errors.name ? 'focus:ring-red-500 border-red-500' : 'focus:ring-primaryColor-500'}`}/>
                 {errors.subject && <span className='text-sm text-red-600  '>{errors.subject}</span>}
                <textarea placeholder='  Your Message'  value={formData.message} name="message" onChange={
                    handleChange
                } className={`border p-2 rounded-md h-32 ${
                       errors.message ? 'focus:ring-red-500 border-red-500' : 'focus:ring-primaryColor-500'
                      }`} ></textarea>
                {errors.message && <span className='text-sm text-red-600 '>{errors.message}</span>}
                
                <Buttons type= {'submit'}>Send Message</Buttons>
                

            </form>
        </div>


      
    </div>
  )
}

export default Contact
