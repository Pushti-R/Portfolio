import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='h-28'>
            <div className='flex justify-center align-middle mt-8 duration-200 transition-all ease-in-out'>
            <CiLinkedin className='w-9 h-9 mr-4 cursor-pointer hover:scale-110' />
            <FaGithub className='w-9 h-9 cursor-pointer hover:scale-110' />
            </div>
            <p className='flex text-[#ffff] text-[14px] justify-center items-center mt-3'>Made with Passion by Pushti R.</p>
        </div>
        
      )
}

export default Footer