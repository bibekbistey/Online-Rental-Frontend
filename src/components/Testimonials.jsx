import React from 'react'
import profile1 from "../assets/profile.jfif"
import profile2 from "../assets/profile3.png"
import profile3 from "../assets/profile4.jpg"
import { FaStar } from "react-icons/fa";
import {motion} from "framer-motion"

const Testimonials = () => {

    const details=[{
        image:profile1,
        name:"Bibek",
        role:"Frontend Developer",
        description:"Finding the perfect rental can be stressful, but this service made it so easy for me. The team was incredibly responsive, answering all my questions and guiding me every step of the way.",
        rating:[<FaStar />,<FaStar />,<FaStar />,<FaStar />]
    },
    {
        image:profile2,
        name:"Simran",
        role:"Software Developer",
        description:"This service completely transformed my rental hunt into a hassle-free experience. Their prompt responses and personalized guidance made all the difference.",
        rating:[<FaStar />,<FaStar />,<FaStar />,<FaStar />,<FaStar />]
    },
    {
        image:profile3,
        name:"Mukesh",
        role:"Engineer",
        description:"Searching for a rental used to be overwhelming, but with this service, everything was seamless.",
        rating:[<FaStar />,<FaStar />,<FaStar />]
    }
    
]
  return (
    <div className='max-w-[1200px] h-full mx-auto mb-20'>
        <motion.h1 initial={{opacity:0, x:-50}} whileInView={{opacity:1, x:0}} transition={{duration:0.5,delay:0.2}}className='font-bold text-3xl text-center'>Customer <span className='font-light border-b border-black'>Testimonials</span></motion.h1>
        <motion.h1 initial={{opacity:0, x:-50}} whileInView={{opacity:1, x:0}} transition={{duration:0.5,delay:0.2}}className='mt-2 font-thin text-center'>Real Stories from Those Who Found Home With Us</motion.h1>
        <div className='flex justify-center mt-5'>
            <div className='md:gap-8 md:grid md:grid-cols-2 lg:grid-cols-3'>
                {details.map((d,index)=>
                <motion.div initial={{opacity:0, x:-50}} whileInView={{opacity:1, x:0}} transition={{duration:0.5,delay:index*0.5}}
                className='border shadow-xl h-[310px] w-[280px] p-2 items-center mx-auto mt-5' key={index}>
                    <img className='mx-auto rounded-full w-[100px]' src={d.image}></img>
                    <h2 className='text-center mt-2 font-bold text-lg'>{d.name}</h2>
                    <h3 className='text-center text-sm'>{d.role}</h3>
                    <p className='flex justify-center mt-2 text-yellow-500'>{d.rating}</p>
                    <p className='mt-3 mx-2 text-sm font-thin'>{d.description}</p>

                </motion.div>)}
            </div>
        </div>

    </div>
  )
}

export default Testimonials