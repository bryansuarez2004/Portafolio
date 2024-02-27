import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";

const PopUp = ({scrolled,setFormOpen}) => {
  const openForm = ()=>{
    setFormOpen((state)=>!state)
  }


  return (
    <>
         <div className={`${scrolled ? 'opacity-100 visible   ' : 'opacity-0 invisible '}    fixed z-10 right-[25px] top-[20vh] rounded-full transition-all duration-700`}>
        <div className=' grid columns-1 gap-3'>
          <a href='https://walink.co/0057de' target='_blank' className='block button'>
         <FaWhatsapp className='text-2xl' />
        
         </a>
         <a href='https://www.linkedin.com/in/bryan-alejandro-suarez-fernandez-980135266/' target='_blank' className='block button'>
         <FaLinkedin className='text-2xl' />
        
         </a>
         <a href='https://github.com/bryansuarez2004' target='_blank' className=' block button '>
         <FaGithub className='text-2xl' />
        

         </a>

         <button onClick={openForm} className='button popUp' >
         <CgMail className='text-2xl' />
           
         </button>
        </div>
         </div>
         

         
    </> 
  )
}

export default PopUp