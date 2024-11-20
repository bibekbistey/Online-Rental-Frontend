import React, { useState } from 'react'
import house10 from "../assets/house.jpg"
import house11 from "../assets/house1.jpg"
import house12 from "../assets/house2.jpg"
import house13 from "../assets/house3.jpeg"
import house14 from "../assets/house4.jpg"
import house15 from "../assets/house5.jpg"
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import {motion} from "framer-motion"

const Project = () => {

  const [currindex,setindex]=useState(0);
  const [slide,setslide]=useState(1);
  
  const nextindex=()=>{
    setindex(currindex+1);
    
  }
  const previndex=()=>{
    setindex(currindex-1);
    if(index===house.length<0){
      setindex(0);
    }
  }

  const house=[
    {image:house10,name: "House 1",price: 40000,location: "Baneshwor"},
  {
    image:house11,
    name: "House 2",
    price: 30000,
    location: "Kalanki"
  },
  {
    image:house12,
    name: "House 3",
    price: 25000,
    location: "Koteshwor"
  },
  {
    image:house13,
    name: "House 4",
    price: 20000,
    location: "Gwarko"
  },
  {
    image:house14,
    name: "House 5",
    price: 10000,
    location: "Seto Pul"
  },
  {
    image:house15,
    name: "House 6",
    price: 20000,
    location: "Balkot"
  }
]

  return (
    <div className='mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden'>
      <motion.h1 initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:0.5,delay:0.2}} className='font-bold text-3xl text-center'>Available <span className='font-normal text-3xl border-b border-black'>Properties</span></motion.h1>
      <motion.p initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:0.5,delay:0.5}}className='text-xl font-light text-center mt-4'>Crafting, Building Legacies-Exploree</motion.p>
      <motion.p initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:0.5,delay:0.5}}className='text-xl font-light text-center'>Our Portfolio</motion.p>

      <div className='text-black flex justify-end space-x-2 cursor-pointer'><FaArrowCircleLeft onClick={previndex} /><FaArrowCircleRight onClick={nextindex} /></div>

      <div className='overflow-hidden'>
        <div className='flex gap-8 transition-transform duration-500 ease-in-out'
        style={{transform:`translateX(-${(currindex*100)/1.5}%)`}}>
          
          {house.map((h,index)=>(
            <motion.div initial={{opacity:0, x:-50}} whileInView={{opacity:1, x:0}} transition={{duration:1,delay:index*0.2}} key={index} className='mt-5 mx-auto relative'>
              <img className='max-w-[500px] h-[60vh] mb-14' src={h.image}></img>
              <motion.div whileHover={{scale:0.9}} className='absolute left-0 right-0  bottom-5 flex justify-center'>
                <div className='inline-block text-center bg-white w-[250px] px-4 py-2 shadow-md'>
                <h2 className='text-xl font-semibold text-gray-800'>{h.name}</h2>
                <p className='text-md font-light text-gray-600'>{h.location}</p>
                <p className='font-mono'>NPR: {h.price}</p>
                </div>
              </motion.div>
            </motion.div>
          ))

          
        }
        </div>
        

      </div>
    </div>
  )
}

export default Project