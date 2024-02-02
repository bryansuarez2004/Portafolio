import React from 'react'

const CardUi = ({title,text}) => {
  return (
     <div className='cardUi flex flex-col items-center justify-center gap-5'>
            <h2>{title}</h2>
            <p>
                {text}</p>      
 
    </div>
  )
}

export default CardUi