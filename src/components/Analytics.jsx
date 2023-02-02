import React from 'react';
import Laptop from '../assets/laptop.jpg';

const Analytics = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='mx-w-[800px] mx:auto grid md:grid-cols-2 '>

                <img src={Laptop} alt="analytics" />

                <div className='flex flex-col justify-center'>

                    <p className='text-[#00df9a] font-bold '>
                        DATA ANALYTICS DASHBOARD
                    </p>

                    <h1 className='py-2 font-bold text-2xl sm:text-3xl md:text-4xl'>
                        Manage Data Analytics Centrally
                    </h1>

                    <p className='max-w-[700px]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum voluptates laudantium rem, quo ratione quam modi, veritatis aliquid animi, enim suscipit. Sint provident reprehenderit doloribus commodi laboriosam nesciunt eos eaque?
                    </p>

                    <button className='bg-black text-[#00df9a] w-[180px] rounded-md font-medium my-6 py-2 mx-auto md:mx-0'>Get Started</button>
                </div>
            </div>
        
        </div>
    )
}

export default Analytics
