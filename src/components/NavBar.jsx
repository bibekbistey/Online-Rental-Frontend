import React, { useState } from 'react'
import logo from "../assets/logo.webp"
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import {motion} from "framer-motion"



const NavBar = () => {

    const items=[{ name: "Home", link: "#home" },
        { name: "About", link: "#about" },
        { name: "Projects", link: "#projects" },
        { name: "Testimonials", link: "#testimonials" },
        { name: "Contact", link: "#contact" },
        ,
    ]

    const [toggle,settoggle]=useState(false);
    const handletoggle=()=>{
        settoggle(!toggle);

    }
  return (
    <div className='absolute w-full font-mono'>
        <div className='flex justify-between items-center'>
        {/* -----logo------- */}
            <motion.div initial={{opacity:0, x:-50}} animate={{opacity:1, x:0}} transition={{duration:0.5,delay:0.2}}
             className='w-[80px] flex ml-5'>
                <img src={logo}></img>

            </motion.div>

            {/* right part */}
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5,delay:0.2}}>
                <ul className='md:flex hidden space-x-7 lg:space-x-10 items-center'>
                {items.map((i,index)=>
                    <li className='cursor-pointer font-bold text-xl lg:text-[25px] text-red-600' key={index}><a href={i.link}>{i.name}</a></li>
                )}
                </ul>
                

            </motion.div>
            <motion.div initial={{opacity:0, x:50}} animate={{opacity:1, x:0}} transition={{duration:0.5,delay:0.2}}
             className='md:flex hidden font-bold'>
                <button className='p-2 bg-white rounded-xl mr-5 text-sm text-black'>Signup</button>
            </motion.div>

            {/* -------small screen------ */}

            <ul className={toggle?'top-0 left-0 fixed w-1/2 h-screen bg-white md:hidden space-y-7 items-center':"fixed left-[-100%]"}>
            <motion.div initial={{opacity:0, x:-50}} whileInView={{opacity:1, x:0}} transition={{duration:0.5,delay:0.2}}
             className=' flex ml-5'>
                <img className='w-[60px]' src={logo}></img>
                <p className='items-center flex mx-4 font-bold font-mon text-xl'>E-rental</p>

            </motion.div>
                {items.map((i,index)=>
                    <motion.li initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} transition={{duration:1,delay:index*0.3}} className='cursor-pointer font-bold text-xl text-red-600 mx-5 mt-10 border-b ' key={index} onClick={()=>settoggle(false)}><a href={i.link}>{i.name}</a></motion.li>
                )}
                 <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:1.8}} className='md:hidden font-bold mx-5 '>
                    <button className='p-2 bg-blue-400 mt-24 rounded-xl text-md text-white'>Signup</button>
                </motion.div>
            </ul>

           

            <div className='mr-5 text-[#8e3ccb] md:hidden'>
                {!toggle?<CiMenuBurger className='mb-3' size={30} onClick={handletoggle} />:<IoMdClose size={30} onClick={handletoggle} />}
            </div>
           
        </div>
        



    </div>
  )
}

export default NavBar