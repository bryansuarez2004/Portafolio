import React from 'react'

const Button = ({texto,handle}) => {
  return (
    <button onClick={handle} className='button'>
            {texto}
    </button>
  )
}

export default Button