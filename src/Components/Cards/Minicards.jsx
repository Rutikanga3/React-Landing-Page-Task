import React from 'react'
import { IoLayers } from "react-icons/io5";
import cafestudying from '../../assets/cafestudying.jpeg'

function Minicards() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-3 pb-20'>
      <div className='flex flex-col gap-y-6'>
        <div className='bg-primaryColor-100 text-black 2 py-5 flex flex-col items-center text-center p-4 rounded-md'>
        <div className='bg-primaryColor-800 text-black rounded-full p-4'><IoLayers/></div><br />
        <h2 className='font-bold text-md mt-4'>Creative Space</h2>
        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div><br />
        <div className='bg-primaryColor-100 text-black 2 py-5 flex flex-col items-center text-center  p-4 rounded-md'>
        <div className='bg-primaryColor-800 text-black rounded-full p-4'><IoLayers/></div><br />
        <h2 className='font-bold text-md mt-4'>High speed wifi</h2>
        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div><br />
        <div className='bg-primaryColor-100 text-black 2 py-5 flex flex-col items-center text-center  p-4 rounded-md'>
        <div className='bg-primaryColor-800 text-black rounded-full p-4'><IoLayers/></div><br />
        <h2 className='font-bold text-md mt-4'>Parking Area</h2>
        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
      </div>
      <div>
        <div className='  md:h-0' style={{backgroundImage: `url(${cafestudying})`, backgroundSize:'cover',
     backgroundPosition:'center',backgroundRepeat:'no-repeat', height:'673px'}}></div>

      </div>
      <div className= 'flex flex-col gap-y-6'>
        <div className='bg-primaryColor-100 text-black 2 py-5 flex flex-col items-center text-center  p-4 rounded-md'>
        <div className='bg-primaryColor-800 text-black rounded-full p-2'><IoLayers size={10}/></div><br />
        <h2 className='font-bold text-md mt-4'>24/7 Access</h2>
        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div><br />
        <div className='bg-primaryColor-100 text-black 2 py-5 flex flex-col items-center text-center  p-4 rounded-md'>
        <div className='bg-primaryColor-800 text-black rounded-full p-4'><IoLayers/></div><br />
        <h2 className='font-bold text-md mt-4'>Great Location</h2>
        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div><br />
        <div className='bg-primaryColor-100 text-black 2 py-5 flex flex-col items-center text-center  p-4 rounded-md'>
        <div className='bg-primaryColor-800 text-black rounded-full p-4'><IoLayers/></div><br />
        <h2 className='font-bold text-md mt-4'>Outdoor space</h2>
        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
      </div>
    </div>
  )
}

export default Minicards
