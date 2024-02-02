import React from 'react'
import Button from './UI/Button'

const Title = ({setFormOpen}) => {
   const showForm = ()=>{
       setFormOpen((state)=> !state)
   }

  return (
    <div id='inicio' className='w-full h-[600px] bg-green-400 absolute top-0 invisible flex items-center justify-center flex-col gap-20 *:visible'>

      <div className=' text-6xl font-bold font-sans text-center text-black dark:text-white  sm:text-7xl'>FRONTEND DEVELOPER</div>
      <h2 data-text={'BRYANSUAREZ'} className='nombre '>BRYANSUAREZ</h2>
      <div className='flex gap-5'>
        <Button texto={'descargar cv'} />
        <Button texto={'contactame'} handle={showForm} />
      </div>
    </div>
  )
}

export default Title