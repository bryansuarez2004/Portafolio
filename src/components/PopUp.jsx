import React from 'react'
import { CgMail } from "react-icons/cg";

const PopUp = ({scrolled,setFormOpen}) => {
  const openForm = ()=>{
    setFormOpen((state)=>!state)
  }


  return (
    <>
         <button onClick={openForm} className={`${scrolled ? 'opacity-100 visible popUp  ' : 'opacity-0 invisible '} w-[150px] h-[150px]   fixed z-10 right-2 bottom-2 rounded-full text-center transition-all duration-700  flex items-center justify-center flex-col `} >
         <CgMail className='text-6xl' />
             Contáctame
         </button>
    </> 
  )
}

export default PopUp