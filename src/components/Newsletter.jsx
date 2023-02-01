import React from 'react'

const Newsletter= () => {
    return (
        <div className='w-full py-16 text-white'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 p-2'>
                <div className='lg:col-span-2'>
                    <h1 className='py-2 font-bold text-2xl sm:text-3xl md:text-4xl'>Want tips & tricks to optimize your flow ?</h1>

                    <p>Sign up to our newsletter and stay up to date.</p>
                </div>

                <div className='my-4 p-2'>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                        <input type="email" placeholder='Enter your Email !' className='p-2 flex w-full rounded-md text-black'/>

                        <button className='bg-[#00df9a] w-[180px] rounded-md font-medium ml-0 sm:ml-4 my-6 mx-auto py-2 text-black'>
                            Notify Me
                        </button>

                        <p>We care about the protection of your data. read our <span className='text-[#00df9a] cursor-pointer'>Privacy Policy</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter



