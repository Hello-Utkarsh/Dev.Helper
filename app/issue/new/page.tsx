'use client'

import React from 'react'

const NewIssue = () => {

  const createIssue = async(formData: FormData) => {

    try {
      const data = {title: formData.get("title"), description: formData.get("description")}

    const result = await fetch('/api/issues', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: data.title, description: data.description }),
    });

    console.log(result, "hello")
    
    if (result.ok) {
      const data = await result.json();
      console.log('Success:', data);
    } else {
      console.error('Error:', result.statusText);
    }
    } catch (error) {
      console.log(error)
    }

    
  }

  return (
    <div className=''>
      <form action={createIssue} className='flex flex-col items-center h-60 justify-around mt-20'>
        <textarea rows={1} name='title' placeholder='Title' className='resize-none h-10 w-2/5 pt-2 px-3 rounded-lg' />
        <textarea rows={1} placeholder='Description' name='description' className='resize-none h-24 w-2/5 pt-2 px-3 rounded-lg' />
        <button type='submit' className='bg-[#457b9d] text-[#f1faee] w-20 rounded-md h-7 font-medium'>Create</button>
      </form>
    </div>
  )
}

export default NewIssue
