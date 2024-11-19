import React from 'react'
import house from "../assets/house.png"
import {motion} from "framer-motion"

const About = () => {
  return (
    <div>
        <motion.div initial={{opacity:0, x:-50}} whileInView={{opacity:1, x:0}} transition={{duration:0.5,delay:0.2}} className='text-center mb-5 text-3xl'>
            <h1 className='font-bold'>About <span className='border-b border-black font-normal'>this Brand</span></h1>
        </motion.div>
        <div className='max-w-[1200px] h-full mx-auto md:flex md:justify-between mt-24'>
            {/* -------image------- */}
            <motion.div initial={{opacity:0, x:-100}} whileInView={{opacity:1, x:0}} transition={{duration:1.5,delay:0.6}}  className='md:h-[60vh]  flex justify-center md:mx-auto'>
                <img className='w-1/2 md:w-[300px] md:h-auto' src={house} ></img>
            </motion.div>
            {/* --------text-part----------- */}
            <div>
                <motion.div initial={{opacity:0, x:100}} whileInView={{opacity:1, x:0}} transition={{delayChildren:1}}
                className='mt-10 grid grid-cols-2 md:space-x-10'>
                    <motion.div initial={{opacity:0, x:100}} whileInView={{opacity:1, x:0}} transition={{delay:1, duration:0.5}} className='mx-auto'>
                        <h1 className='font-bold text-3xl'>10+</h1>
                        <h2 className='text-2xl font-thin'>Year of Excellence</h2>
                    </motion.div>
                    <motion.div initial={{opacity:0, x:100}} whileInView={{opacity:1, x:0}} transition={{delay:1.5, duration:0.5}} className='mx-auto'>
                        <h1 className='font-bold text-3xl'>120+</h1>
                        <h2 className='text-xl font-thin'>Rental Space Provided</h2>
                    </motion.div>
                    <motion.div initial={{opacity:0, x:100}} whileInView={{opacity:1, x:0}} transition={{delay:2, duration:0.5}} className='mx-auto mt-5'>
                        <h1 className='font-bold text-3xl'>20+</h1>
                        <h2 className='text-xl font-thin'>Rental Rooms Available</h2>
                    </motion.div>
                    <motion.div initial={{opacity:0, x:100}} whileInView={{opacity:1, x:0}} transition={{delay:2.5, duration:0.5}} className='mx-auto mt-5'>
                        <h1 className='font-bold text-4xl'>1000+</h1>
                        <h2 className='text-2xl font-thin'>Customer Visited</h2>
                    </motion.div>

                </motion.div>
                <motion.div initial={{opacity:0, y:100}} whileInView={{opacity:1, y:0}} transition={{delay:2.7, duration:0.5}} className='w-[400px] mx-auto mt-5'>
                    <p>eRental connects you to exceptional homes and spaces, making your dream living experience a reality</p>
                    <button className='p-2 bg-blue-200 rounded-xl mt-5'>Learn More</button>
                </motion.div>
            </div>
            


    </div>

    </div>
    
  )
}

export default About