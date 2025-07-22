import React from 'react'
import { IoLayers } from "react-icons/io5";
import cafestudying from '../../assets/cafestudying.jpeg'

function Minicards() {
  return (
    <div className='grid grid-cols-3  gap-3  pb-20'>
      <div>
        <div className='bg-primaryColor-100 text-black 2 py-5 flex flex-col items-center text-center p-4 rounded-md'>
        <div className='bg-primaryColor-800 text-black rounded-full p-4'><IoLayers/></div><br />
        <h2 className='font-bold text-md'>Creative Space</h2>
        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div><br />
        <div className='bg-primaryColor-100 text-black 2 py-5 flex flex-col items-center text-center  p-4 rounded-md'>
        <div className='bg-primaryColor-800 text-black rounded-full p-4'><IoLayers/></div><br />
        <h2 className='font-bold text-md'>High speed wifi</h2>
        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div><br />
        <div className='bg-primaryColor-100 text-black 2 py-5 flex flex-col items-center text-center  p-4 rounded-md'>
        <div className='bg-primaryColor-800 text-black rounded-full p-4'><IoLayers/></div><br />
        <h2 className='font-bold text-md'>Parking Area</h2>
        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
      </div>
      <div>
        <div className='' style={{backgroundImage: `url(${cafestudying})`, backgroundSize:'cover',
     backgroundPosition:'center',backgroundRepeat:'no-repeat',height:'30px', height:'528px'}}></div>

      </div>
      <div>
        <div className='bg-primaryColor-100 text-black 2 py-5 flex flex-col items-center text-center  p-4 rounded-md'>
        <div className='bg-primaryColor-800 text-black rounded-full p-4'><IoLayers/></div><br />
        <h2 className='font-bold text-md'>24/7 Access</h2>
        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div><br />
        <div className='bg-primaryColor-100 text-black 2 py-5 flex flex-col items-center text-center  p-4 rounded-md'>
        <div className='bg-primaryColor-800 text-black rounded-full p-4'><IoLayers/></div><br />
        <h2 className='font-bold text-md'>Great Location</h2>
        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div><br />
        <div className='bg-primaryColor-100 text-black 2 py-5 flex flex-col items-center text-center  p-4 rounded-md'>
        <div className='bg-primaryColor-800 text-black rounded-full p-4'><IoLayers/></div><br />
        <h2 className='font-bold text-md'>Outdoor space</h2>
        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
      </div>
    </div>
  )
}

export default Minicards
