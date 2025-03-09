import React from 'react'
import image from "../images/p-4.png";
import image1 from "../images/abou1.jpg";
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'



function About() {
  return (

    <div>
    <Header/>
        <div className='mt-5'>
      <div className='relative bg-cover bg-center  flex flex-col 
        justify-center items-center text-white pt-20 w-full h-80'>
       
        <img className='w-full h-80' src={image} alt="" />

   
        <div className='absolute inset-0 bg-black bg-opacity-50'></div>
        <div className=' absolute  left-0 ml-40 pt-8'>
        <h1 className='text-xl mt-3'>About Us</h1>
        <p className='text-5xl mt-5'>About Us - Who We Are?</p>
        </div>
      </div>
      
      {/* section2 */}
      <div className='mt-10 mp-10 ml-40'>
      <div className='flex  gap-12 pt-20'>
        {/* left */}
        <div>
         <h1 className=' text-5xl  font-semibold'>Our Agency Story</h1>
         <p className='text-gray-400 mt-6'>Check out our company story and 
            work process</p>
            <p className='mt-6  leading-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br></br> eiusmod tempor incididunt ut labore et 
            dolore magna aliqua. Ut <br></br>enim ad minim veniam, quis nostrud
             exercitation ullamco laboris <br></br>nisi ut aliquip ex ea commodo consequat.</p>

             <p className='mt-6 leading-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br></br> eiusmod 
             tempor incididunt ut labore et dolore magna aliqua. Ut<br></br> enim ad minim veniam,
                 quis nostrud exercitation ullamco laboris<br></br> nisi ut aliquip.</p>
                 <button className='bg-green-500 text-white px-8 py-2 rounded-3xl
                 mt-10'>More About Us</button>
        </div>
        {/* right */}
        <div className='mt-10'>
     <img className='w-[500px] h-400px]' src={image1} alt="" />
        </div>
      </div>
      </div>
        </div>
    <Footer/>

    </div>
  )
}

export default About
