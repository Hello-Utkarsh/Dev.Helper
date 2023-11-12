import { Sql } from '@prisma/client/runtime/library'
import React from 'react'

const NewIssue = () => {
  return (
    <div className='flex flex-col items-center h-60 justify-around mt-20'>
      <textarea rows={1} placeholder='Title' className='resize-none h-10 w-2/5 pt-2 px-3 rounded-lg'/>
      <textarea rows={1} placeholder='Description' className='resize-none h-24 w-2/5 pt-2 px-3 rounded-lg'/>
      <button className='bg-[#457b9d] text-[#f1faee] w-20 rounded-md h-7 font-medium'>Create</button>
    </div>
  )
}

export default NewIssue
