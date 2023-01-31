import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] uppercase font-bold p-2'>growing with analytics</p>
            <h1  className='font-bold text-4xl sm:text-6xl md:text-7xl md:py-6'>Grow with data.</h1>
            <div className='flex items-center justify-center py-4'>
                <p className='font-bold text-xl sm:text-4xl md:text-5xl'>
                    Fast, flexible finance for
                </p>

                <Typed className='font-bold text-xl sm:text-4xl md:text-5xl pl-2 md:pl-4'
                    strings={['', 'BTB', '', 'BTC', '', 'SAAS']}
                    typeSpeed={50}
                    backSpeed={10}
                    loop
                />
            </div>

            <p className='font-bold text-gray-500 text-xl md:text-2xl'>Monitor your data analytics to increase revenue for BTB, BTC, & SAAS platforms</p>

            <button className='bg-[#00df9a] w-[180px] rounded-md font-medium my-6 mx-auto py-2 text-black'>
                Get started
            </button>
        </div>
    </div>
  )
}

export default Hero;
