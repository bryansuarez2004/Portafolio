import React from 'react'

const PopUp = ({scrolled}) => {
  return (
    <>
         <button className={`${scrolled ? 'opacity-100 visible ' : 'opacity-0 invisible '} w-[160px] h-[160px] bg-green-500  fixed z-10 right-2 bottom-2 rounded-full text-center transition-all duration-700 dark:bg-orange-700 `} >
             POP UP
         </button>
    </> 
  )
}

export default PopUp