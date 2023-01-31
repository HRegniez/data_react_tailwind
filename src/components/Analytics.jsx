import React from 'react';
import Laptop from '../assets/laptop.jpg';

const Analytics = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='mx-w-[1240px] mx:auto grid md:grid-cols-2 '>
                <img src={Laptop} alt="analytics" />
                <div>
                    <p></p>
                    <h1>
                        Manage Data Analytics Centrally
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum voluptates laudantium rem, quo ratione quam modi, veritatis aliquid animi, enim suscipit. Sint provident reprehenderit doloribus commodi laboriosam nesciunt eos eaque?
                    </p>
                </div>
            </div>
        
        </div>
    )
}

export default Analytics
