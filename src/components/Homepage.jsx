import React from 'react'
import items from "../components/NavBar"
import {motion} from "framer-motion";

const Homepage = () => {
  return (
    <div className=''>
        <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden'
            style={{backgroundImage:"url('/bg1.jpg')"}}>
        <div className='mx-auto text-center px-6 py-4 md:px-20 lg:px-32'>
            <motion.div initial={{opacity:0, y:100}} whileInView={{opacity:1, y:0}} transition={{duration:1}}
             className='font-serif text-[white] font-bold'>
                <h1 className='text-5xl sm:text-6xl md:text-[82px]  max-w-3xl'>Your Dream Home, Just a Click Away</h1>
            </motion.div>
            <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:1}}
            className='p-2 mt-2'>
              <button className='p-3 bg-blue-500 rounded-lg font-semibold font-serif text-white'><a href="#contact">Contact Us</a></button>
                
            </motion.div>
        </div>
            
        </div>
        
    </div>
  )
}

export default Homepage