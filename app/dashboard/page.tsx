import React from 'react'
import getCurrentUser from '../actions/getCurrentUser'
import { redirect } from 'next/navigation';

const page = async () => {
  const user = await getCurrentUser();
  
  if(!user){
    redirect('/login');
  }

  return (
    <div>Dashboard</div>
  )
}

export default page