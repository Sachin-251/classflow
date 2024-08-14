import React from 'react'

const UnauthorizedView = () => {
  return (
    <div className='h-screen w-full bg-white'>
        <div className='h-screen w-full blur-md'></div>
        <div className='absolute top-50 left-50'>
            <h2 className='text-center text-4xl'>401</h2>
            <h2 className='text-center text-2xl'>Unauthorized Access</h2>
        </div>
    </div>
  )
}

export default UnauthorizedView