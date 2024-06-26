import React from 'react'

const PageHeader = ({title}) => {
  return (
    <div className='flex flex-col justify-center items-start w-full my-4'>
        <p className='font-bold text-xl text-red'>{title}</p>
        <span className='bg-red h-0.5 w-full' />
    </div>
  )
}

export default PageHeader