'use client';
import { useRouter } from 'next/navigation'
import React from 'react'

export default function AboutPage() {

  const router = useRouter();
  const isLogin = true;

  const handleNavigation = () => {

    if(isLogin){
      router.push('/about/address')
    }else{
      router.push('/')
    }

  }

  return (
    <div>
        <p className='text-2xl text-black'>this about</p>
        <button className='bg-red-400  p-2 rounded-xl' type='submit' onClick={handleNavigation} >
        On click
        </button>
    </div>
  )
}
