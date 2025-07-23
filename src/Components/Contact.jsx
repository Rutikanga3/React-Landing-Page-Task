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
            <form action= '' className='flex flex-col gap-4' onSubmit={handleSubmit}>
                <Inputs type='text' name='name' placeholder='Name' value={formData.name}  onChange={handleChange}
                  className={`text-grey`}/>
                  {errors.name && <span className='text-sm text-red-600 '>{errors.name}</span>}
                <Inputs type='Email' name='email' placeholder='Email'  value={formData.email} onChange={handleChange}   className={`text-grey`}/>
                {errors.email && <span className='text-sm text-red-600 '>{errors.email}</span>}
                <Inputs type='text' name='subject' placeholder='Subject'  value={formData.subject} onChange={handleChange}  className={`text-grey`}/>
                <textarea placeholder='  Your Message'  value={formData.message} name="message" onChange={
                    handleChange
                } className='border border-primaryColor-500 p-2 rounded-md h-32'></textarea>
                {errors.message && <span className='text-sm text-red-600 '>{errors.message}</span>}
                
                <Buttons type= {'submit'}>Send Message</Buttons>
                

            </form>
        </div>


      
    </div>
  )
}

export default Contact
