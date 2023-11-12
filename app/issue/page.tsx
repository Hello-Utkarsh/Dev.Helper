import Link from 'next/link'
import React from 'react'

const IssuePage = () => {
  return (
    <div className='flex justify-end'>
      <div className='flex w-4/5 justify-around items-center mt-10'>
        <div className='flex w-2/4 justify-around items-center'>
          <input type="text" placeholder='Search...' name="" id="" className='w-10/12 h-9 p-4 rounded-lg' />
          <button className='my-auto bg-[#457b9d] text-[#f1faee] w-20 rounded-md h-7 font-medium'>Search</button>
        </div>
        <Link href='/issue/new'><button className='my-auto bg-[#457b9d] text-[#f1faee] w-28 rounded-md h-7 font-medium'>Create Issue</button></Link>
      </div>
    </div>
  )
}

export default IssuePage
