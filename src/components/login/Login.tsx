"use client"
import React from 'react'
import { useUser } from '@auth0/nextjs-auth0/client'
import Link from 'next/link'

type Props = {}

export default function Login({}: Props) {
  const { user, error, isLoading } = useUser();

  return (
    <div className='flex flex-col w-screen h-screen items-center mt-48'>
      <div className='text-5xl font-bold'>Login</div>
      <div className='w-2/3 border-4 rounded-xl border-black h-12 mt-12 flex items-center'>
        <input type='email' name='email' placeholder='Email' className='text-md flex-1 outline-none pl-4' />
      </div>
      <div className='w-2/3 border-4 rounded-xl border-black h-12 mt-8 flex items-center'>
        <input type='password' name='password' placeholder='Password' className='text-md flex-1 outline-none pl-4' />
      </div>
    </div>
  )
  
}