import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className=' px-6  m-1 my-4 rounded h-10 font-normal  bg-gray-300'>{name}</button>
    </div>
  )
}

export default Button