import React from 'react'
import image2 from "../../images/city-1.png";
import image3 from "../../images/city-2.png";
import image4 from "../../images/city-3.png";
import image5 from "../../images/city-4.png";
import image6 from "../../images/city-5.png";
import image7 from "../../images/city-6.png";
function Location() {
  return (
    <div className='pt-20'>
        <h1 className='text-5xl text-center font-semibold'>Explore By Location</h1>

        <p className='text-center text-gray-500 mt-6 text-[19px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br></br>
         incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>


         <div className='px-8  mt-10  grid grid-cols-3 gap-4 '>
         <div className='bg-gray-400/25 w-[370px] h-[250px] 
         rounded-lg ml-20 relative  '>
 

  {/* Image container */}
  <div className='absolute top-[-10px] right-[2px] w-[380px] h-[300px] mr-4'>
    <img className='rounded-lg w-[400px] h-[250px] object-cover opacity-200'
      src={image2}
      
    />
    <div className=' absolute  top-[100px]  text-white ml-10 font-bold text-2xl'>
    <h1>New Orleans, Louisiana</h1>
    <ul className='text-white text-[14px] flex gap-5 mt-2'>
      <li>12 Villas</li>
      <li>07 Offices</li>
      <li>10 Apartments</li>
    </ul>
    </div>
    

  
</div>

</div>
        
        {/* two */}
        <div className='bg-gray-400/25 w-[370px] h-[250px] 
         rounded-lg ml-20 relative  '>
 

  {/* Image container */}
  <div className='absolute top-[-10px] right-[2px] w-[380px] h-[300px] mr-4'>
    <img className='rounded-lg w-[400px] h-[250px] object-cover opacity-200'
      src={image3}
      
    />
    <div className=' absolute  top-[100px]  text-white ml-10 font-bold text-2xl'>
    <h1>Jerrsy, United State</h1>
    <ul className='text-white text-[14px] flex gap-5 mt-2'>
      <li>12 Villas</li>
      <li>07 Offices</li>
      <li>10 Apartments</li>
    </ul>
    </div>
    

  
</div>

</div>
<div className='bg-gray-400/25 w-[370px] h-[250px] 
         rounded-lg ml-20 relative  '>
 

  {/* Image container */}
  <div className='absolute top-[-10px] right-[2px] w-[380px] h-[300px] mr-4'>
    <img className='rounded-lg w-[400px] h-[250px] object-cover opacity-200'
      src={image4}
      
    />
    <div className=' absolute  top-[100px]  text-white ml-10 font-bold text-2xl'>
    <h1>Liverpool, London</h1>
    <ul className='text-white text-[14px] flex gap-5 mt-2'>
      <li>12 Villas</li>
      <li>07 Offices</li>
      <li>10 Apartments</li>
    </ul>
    </div>
    

  
</div>

</div>
<div className='bg-gray-400/25 w-[370px] h-[250px] 
         rounded-lg ml-20 relative  '>
 

  {/* Image container */}
  <div className='absolute top-[-10px] right-[2px] w-[380px] h-[300px] mr-4'>
    <img className='rounded-lg w-[400px] h-[250px] object-cover opacity-200'
      src={image5}
      
    />
    <div className=' absolute  top-[100px]  text-white ml-10 font-bold text-2xl'>
    <h1>NewYork, United States</h1>
    <ul className='text-white text-[14px] flex gap-5 mt-2'>
      <li>12 Villas</li>
      <li>07 Offices</li>
      <li>10 Apartments</li>
    </ul>
    </div>
    

  
</div>

</div>
<div className='bg-gray-400/25 w-[370px] h-[250px] 
         rounded-lg ml-20 relative  '>
 

  {/* Image container */}
  <div className='absolute top-[-10px] right-[2px] w-[380px] h-[300px] mr-4'>
    <img className='rounded-lg w-[400px] h-[250px] object-cover opacity-200'
      src={image6}
      
    />
    <div className=' absolute  top-[100px]  text-white ml-10 font-bold text-2xl'>
    <h1>Montreal, Canada</h1>
    <ul className='text-white text-[14px] flex gap-5 mt-2'>
      <li>12 Villas</li>
      <li>07 Offices</li>
      <li>10 Apartments</li>
    </ul>
    </div>
    

  
</div>

</div>
<div className='bg-gray-400/25 w-[370px] h-[250px] 
         rounded-lg ml-20 relative  '>
 

  {/* Image container */}
  <div className='absolute top-[-10px] right-[2px] w-[380px] h-[300px] mr-4'>
    <img className='rounded-lg w-[400px] h-[250px] object-cover opacity-200'
      src={image7}
      
    />
    <div className=' absolute  top-[100px]  text-white ml-10 font-bold text-2xl'>
    <h1>California, USA</h1>
    <ul className='text-white text-[14px] flex gap-5 mt-2'>
      <li>12 Villas</li>
      <li>07 Offices</li>
      <li>10 Apartments</li>
    </ul>
    </div>
    

  
</div>

</div>

        
         </div>

    </div>
  )
}

export default Location