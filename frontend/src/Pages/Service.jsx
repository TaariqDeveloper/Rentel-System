import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import image from "../images/p-6.png";
import image1 from "../images/h1.png"
import image2 from "../images/h2.png"
import image3 from "../images/h3.png"
import image4 from "../images/h4.png"
import image5 from "../images/h6.png"

function Service() {
  return (
    <div>
        <Header/>
  <div className='mt-5'>
  <div className='relative bg-cover bg-center  flex flex-col 
        justify-center items-center text-white pt-20 w-full h-80'>
         
          <img className='w-full h-80' src={image} alt="" />
  
     
          <div className='absolute inset-0 bg-black bg-opacity-50'></div>
          <div className=' absolute  left-0 ml-40 pt-8'>
          <h1 className='text-xl mt-3'>Services</h1>
          <p className='text-5xl mt-5'>Services -All Services</p>
          </div>
        </div>

        <div className='mt-10 pt-[80px] px-10 pb-20'>
          <div className='flex gap-10 ml-20'>
           <div className='bg-white w-[200px] h-[180px] 
            shadow-lg shadow-gray-400/50 rounded-lg  text-center pt-1'>
              
              <img className='w-[80px] h-[80px] mt-2 ml-[60px]' src={image1} alt="" />
                 <h1 className='text-xl font-semibold mt-1'>Family House</h1>
                 <p  className='text-gray-400 m-1'>122 Property</p>
                 

       
           </div>
          



           <div className='bg-white w-[200px] h-[180px] 
            shadow-lg shadow-gray-400/50 rounded-lg  text-center pt-1'>
              
              <img className='w-[80px] h-[80px] mt-2 ml-[60px]' src={image2} alt="" />
                 <h1 className='text-xl font-semibold mt-1'>House & Villa</h1>
                 <p  className='text-gray-400 m-1'>155 Property</p>
                 

       
           </div>
           <div className='bg-white w-[200px] h-[180px] 
            shadow-lg shadow-gray-400/50 rounded-lg  text-center pt-1'>
              
              <img className='w-[80px] h-[80px] mt-2 ml-[60px]' src={image3} alt="" />
                 <h1 className='text-xl font-semibold mt-1'>Apartment</h1>
                 <p  className='text-gray-400 m-1'>300 Property</p>
                 

       
           </div>
           <div className='bg-white w-[200px] h-[180px] 
            shadow-lg shadow-gray-400/50 rounded-lg  text-center pt-1'>
              
              <img className='w-[80px] h-[80px] mt-2 ml-[60px]' src={image4} alt="" />
                 <h1 className='text-xl font-semibold mt-1'>Office & Studio</h1>
                 <p  className='text-gray-400 m-1'>80 Property</p>
                 

       
           </div>
           <div className='bg-white w-[200px] h-[180px] 
            shadow-lg shadow-gray-400/50 rounded-lg  text-center pt-1'>
              
              <img className='w-[80px] h-[80px] mt-2 ml-[60px]' src={image5} alt="" />
                 <h1 className='text-xl font-semibold mt-1'>Villa & Condo</h1>
                 <p  className='text-gray-400 m-1'>80 Property</p>
                 

       
           </div>
          </div>
        </div>
  </div>
<Footer/>
    </div>
  )
}

export default Service
