import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] uppercase font-bold p-2'>growing with analytics</p>
            <h1  className='font-bold text-4xl sm:text-6xl md:text-7xl md:py-6'>Grow with data.</h1>
            <div className='flex items-center justify-center'>
                <p className='font-bold text-xl sm:text-4xl md:text-5xl'>
                    Fast, flexible finance for
                </p>

                <Typed className='font-bold text-xl sm:text-4xl md:text-5xl pl-2'
                    strings={['', 'BTB', '', 'BTC', '', 'SAAS']}
                    typeSpeed={50}
                    backSpeed={10}
                    loop
                />
            </div>

            <p>Monitor your data analytics to increase revenue for BTB, BTC, & SAAS platforms</p>

        </div>
    </div>
  )
}

export default Hero;
