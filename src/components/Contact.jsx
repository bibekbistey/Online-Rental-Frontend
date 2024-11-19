import React from 'react';
import {motion} from "framer-motion"

const Contact = () => {
  return (
    <motion.div initial={{opacity:0, y:100}} whileInView={{opacity:1, y:0}} transition={{duration:0.5,delay:0.3}} className="max-w-[1200px] mx-auto px-4 md:px-8 h-auto mt-10 border-t-2 pb-10">
      <h1 className="text-center text-3xl font-bold mb-3 mt-10">
        Contact <span className="font-normal border-b border-black">With Us</span>
      </h1>
      <h2 className="text-center font-mono text-lg">
        Ready to Make a Move? Let's Build Your
      </h2>
      <h2 className="text-center font-mono text-lg mb-6">Future Together</h2>
      
      {/* Form Section */}
      <div>
        <form className="flex flex-col md:grid md:grid-cols-2 gap-6 mt-10 items-center">
          {/* Name Field */}
          <div className="w-full">
            <label className="block mb-2 text-sm font-medium">Your Name</label>
            <input
              type="text"
              className="border-2 border-gray-300 p-4 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Name"
            />
          </div>
          
          {/* Email Field */}
          <div className="w-full">
            <label className="block mb-2 text-sm font-medium">Your Email</label>
            <input
              type="email"
              className="border-2 border-gray-300 p-4 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email"
            />
          </div>
          
          {/* Message Field */}
          <div className="w-full md:col-span-2">
            <label className="block mb-2 text-sm font-medium">Message</label>
            <textarea
              className="border-2 border-gray-300 p-4 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Message"
              rows="4"
            ></textarea>
          </div>
          
          {/* Submit Button */}
          <div className="w-full md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
