import React from 'react'

const AboutMe = () => {
  return (
    <div id='about' className=' h-[300px] aboutMe flex justify-center items-center'>
 
      <div className='grid gap-6  p-4 rounded-3xl min-h-[250px] max-w-[600px] text-center card mb-6 '>
      <h2 className='text-black dark:text-white text-5xl font-semibold'>SOBRE MI</h2>
       <p className='text-black dark:text-white '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis consectetur porro, ad laboriosam reiciendis at adipisci dolorum delectus quasi, molestias, quod exercitationem eligendi esse ea autem fugiat dignissimos iusto asperiores.</p>
      </div>
    </div>
  )
}

export default AboutMe