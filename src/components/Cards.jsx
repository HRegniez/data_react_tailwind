import React from 'react'
import single from '../assets/single.png';
import double from '../assets/double.png';
import triple from '../assets/triple.png';

const Cards = () => {
    return (
        <div className='w-full py-[10rem] bg-white' >
            <div className='max-w-[1240px] grid md:grid-cols-3 gap-8 p-4'>

                <div className='w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300'>

                    <img className='w-20 mx-auto mt-[-2rem] bg-white' src={single} alt="single" />

                    <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                    <p className='text-center text-4xl font-bold'>$149</p>

                    <div className='text-center font-medium'>

                        <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                        <p className='py-2 border-b mx-8'>1 Granted User</p>
                        <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                    </div>

                    <button className='bg-[#00df9a] text-black w-[180px] rounded-md font-medium my-6 py-2 mx-auto'>Start Trial</button>
                </div>


                <div className='w-full shadow-xl flex flex-col p-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-300'>

                    <img className='w-20 mx-auto mt-[-2rem] bg-white' src={double} alt="double" />

                    <h2 className='text-2xl font-bold text-center py-8 md:py-10'>Partnership</h2>
                    <p className='text-center text-4xl font-bold'>$199</p>

                    <div className='text-center font-medium'>

                        <p className='py-2 border-b mx-8 md:py-4 mt-8'>1 TB Storage</p>
                        <p className='py-2 border-b mx-8 md:py-4'>3 Granted Users</p>
                        <p className='py-2 border-b mx-8 md:py-4'>Send up to 5 GB</p>
                    </div>

                    <button className='bg-black text-[#00df9a] w-[180px] rounded-md font-medium my-6 py-2 md:py-3 mx-auto'>Start Trial</button>
                </div>


                <div className='w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300'>

                    <img className='w-20 mx-auto mt-[-2rem] bg-white' src={triple} alt="group" />

                    <h2 className='text-2xl font-bold text-center py-8'>Group Account</h2>
                    <p className='text-center text-4xl font-bold'>$299</p>

                    <div className='text-center font-medium'>

                        <p className='py-2 border-b mx-8 mt-8'>5 TB Storage</p>
                        <p className='py-2 border-b mx-8'>10 Granted User</p>
                        <p className='py-2 border-b mx-8'>Send up to 10 GB</p>
                    </div>

                    <button className='bg-[#00df9a] text-black w-[180px] rounded-md font-medium my-6 py-2 mx-auto'>Start Trial</button>
                </div>
            </div>
        </div>
    )
}

export default Cards
