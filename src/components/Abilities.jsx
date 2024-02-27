import React from 'react'
import CardUi from './UI/CardUi'

const Abilities = () => {
  return (
    <div className='bg-emerald-200 p-6 bgAbilities dark:text-white transition duration-500'>
        <h2 className='text-3xl text-center mb-7 uppercase font-bold'>Que me hace único?</h2>

        <div className=' max-w-[1000px] mx-auto grid sm:grid-cols-2 gap-7'>
           <CardUi text={'Tengo la disposición para aprender nuevas tecnologías y mejorar mis habilidades existentes.'} title={'Aprendizaje Continuo'}/>
           <CardUi text={'Tengo la capacidad para colaborar en equipo y compartir conocimientos.'} title={'Trabajo en equipo'}/>
           <CardUi text={'Abordo los proyectos con fervor y compromiso, con el objetivo de superar expectativas.'} title={'Compromiso'}/>
           <CardUi text={'Tengo la capacidad de comunicarme efectivamente y transmitir mis ideas de forma clara'} title={'Comunicación efectiva'}/>
        </div>


    </div>
  )
}

export default Abilities