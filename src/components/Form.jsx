import React from 'react'
import { IoIosCloseCircle } from "react-icons/io";
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';

const Form = ({formOpen,setFormOpen}) => {
  const {register,handleSubmit,formState:{errors},reset }=useForm()
  let formT = 'formClose'
  const onSubmit = handleSubmit((data)=>{
    
      
     emailjs.send("service_rh3cbxc","template_4d5imvt",{
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
  

  if(formOpen){
     formT = 'formOpen'
    }else{
      
      formT = 'formClose'
  }
    
  const handleClose = ()=>{
    setFormOpen((state) => !state)
  }  
  



  return (
    <div className={`fixed w-screen h-screen top-0 left-0 z-[1000] flex justify-center items-center form transition-all duration-500 ${formT} `}>
        <form onSubmit={onSubmit} className='  p-5 flex flex-col gap-2 h-[80%] w-[80%] sm:w-[50%] pt-12 rounded-2xl  border-2 border-black formMain relative '>
            <h2 className='text-center text-xl uppercase font-bold dark:text-white'>Enviame un correo:</h2>
            <IoIosCloseCircle onClick={handleClose} className='absolute top-3 right-3 text-4xl hover:text-white transition duration-500 dark:text-white cursor-pointer dark:hover:text-purple-800' />
            <label htmlFor="nombre" className='text-xl dark:text-white'>Nombre:</label>
            <input type="text"  className='rounded-xl p-1' id='nombre' {...register('nombre',{
              required:{
                value:true,
                message:'el nombre es requerido'
              }
            })}/>
            {errors.nombre && <span className='text-red-600 dark:text-red-300'>{errors.nombre.message}</span> }
            <label htmlFor="correo"  className='text-xl dark:text-white' >Correo:</label>
            <input type="text"  className='rounded-xl p-1' id='correo'  {...register('correo',{
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
            <textarea  id="mensaje" cols="30" rows="10" className='resize-none rounded-xl p-1' {...register('mensaje',{
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

export default Form