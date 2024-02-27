import React from 'react'
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';

const FormMain = () => {
    const {register,handleSubmit,formState:{errors},reset }=useForm()
    const onSubmit = handleSubmit((data)=>{
      
        
       emailjs.send("service_mk7ymhf","template_4d5imvt",{
         name: data.nombre,
         message: data.mensaje,
         email: data.correo,
         reply_to: "",
         }, 'xvYLbpTmF2GDN6ZoV')
       .then((result) => {
           console.log(result.text);
           alert('se envio correctamente')
           reset()
       }, (error) => {
           console.log(error.text);
           alert('hubo un error en el envio, por favor intente denuevo')
       })
    }) 



  return (
   <div className='p-5 flex items-center justify-center'>
     <form onSubmit={onSubmit} className=' p-5 flex flex-col gap-2 h-[450px] w-[80%] sm:w-[50%] pt-12 rounded-2xl  border-2 border-black formMain relative '>
            <h2 className='text-center text-xl uppercase font-bold dark:text-white'>Enviame un correo:</h2>
            
            <label htmlFor="nombre" className='text-xl dark:text-white'>Nombre:</label>
            <input type="text"  className='rounded-xl' id='nombre' {...register('nombre',{
              required:{
                value:true,
                message:'el nombre es requerido'
              }
            })}/>
            {errors.nombre && <span className='text-red-600 dark:text-red-300'>{errors.nombre.message}</span> }
            <label htmlFor="correo"  className='text-xl dark:text-white' >Correo:</label>
            <input type="text"  className='rounded-xl' id='correo'  {...register('correo',{
              required:{
                value:true,
                message:'el correo es requerido'
              },
              pattern:{
                value:/.*@.*/,
                message:'el correo debe ser valido'
              }
            })}/>
             {errors.correo && <span className='text-red-600 dark:text-red-300'>{errors.correo.message}</span> }
            <label htmlFor="mensaje"  className='text-xl dark:text-white'>Mensaje:</label>
            <textarea  id="mensaje" cols="30" rows="10" className='resize-none rounded-xl' {...register('mensaje',{
              required:{
                value:true,
                message:'debe escribir un mensaje'
              }
            })}></textarea>
            {errors.mensaje && <span className='text-red-600 dark:text-red-300'>{errors.mensaje.message}</span> }
             <button  className='button w-[50%] flex items-center justify-center mx-auto mt-4'>enviar</button>
        </form>
   </div>
  )
}

export default FormMain