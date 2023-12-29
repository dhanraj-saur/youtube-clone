import React from 'react'
import { Users } from '../utils/Constants'

const ChatMassages = ({ name, massage }) => {
  return (
    <div className=''>
      <div className='w-full flex '>
        <div className='bg-slate-300 p-2 m-2 flex text-center  gap-2 rounded-3xl'>
          <img src={Users} alt='Users' className='h-6 w-6 rounded-3xl' />
          <span className='font-bold'>{name}</span>
          <span className='px-2'>{massage}</span>
        </div>
      </div>
     
    </div>
  )
}

export default ChatMassages