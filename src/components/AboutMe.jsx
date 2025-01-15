import React from 'react'

const AboutMe = () => {
  return (
    <div id='about' className=' p-5 h-[500px] flex items-end justify-center'>

    <div  className=' h-[300px] aboutMe flex justify-center items-center'>
 
      <div className='grid gap-6  p-4 rounded-3xl min-h-[250px] max-w-[600px] text-center card mb-6 '>
      <h2 className='text-black dark:text-white text-5xl font-semibold'>SOBRE MI</h2>
       <p className='text-black dark:text-white '>Soy un desarrollador web fullstack especializado en front end, apasionado por el trabajo en equipo y comprometido con el aprendizaje constante.
Mi autonomía y capacidad de aprendizaje rápido me permite dominar rápidamente nuevas tecnologías, por lo que no me resulta difícil migrar de tecnologías o aprender nuevas si se necesita, además, como profesional me impulso a mantenerme actualizado en mi campo y buscar oportunidades para crecer.</p>
      </div>
    </div>
    </div>
  )
}

export default AboutMe