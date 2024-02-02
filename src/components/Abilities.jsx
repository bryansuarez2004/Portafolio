import React from 'react'
import CardUi from './UI/CardUi'

const Abilities = () => {
  return (
    <div className='bg-emerald-200 p-6 bgAbilities dark:text-white transition duration-500'>
        <h2 className='text-3xl text-center mb-7 uppercase font-bold'>Que me hace único?</h2>

        <div className=' max-w-[1000px] mx-auto grid sm:grid-cols-2 gap-7'>
           <CardUi text={'soy muy adaptable'} title={'adaptabilidad'}/>
           <CardUi text={'soy muy adaptable'} title={'adaptabilidad'}/>
           <CardUi text={'soy muy adaptable'} title={'adaptabilidad'}/>
           <CardUi text={'soy muy adaptable'} title={'adaptabilidad'}/>
        </div>


    </div>
  )
}

export default Abilities