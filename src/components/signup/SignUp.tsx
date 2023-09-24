"use client"
import React from 'react'
import { useRef } from 'react'
import config from 'dotenv/config'
import auth0 from 'auth0-js'

type Props = {}

export default function SignUp({}: Props) {
  const webAuth = new auth0.WebAuth({
    domain: 'dev-36076d8bkapyh3sk.us.auth0.com',
    clientID: 'Ksg7UPOnjQyK4l5LBcXUqPROP0KhFwPt'
  })

  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e : any) => {
    e.preventDefault();

    const email = emailRef.current;
    const password = passwordRef.current;
    
    if(email !== null && password !== null) {
      webAuth.signup({
        connection: 'Username-Password-Authentication',
        email: email.value,
        password: password.value,
      }, function(e) {
        if(e) return console.log(e);
        console.log(email + '\n' + password)
        return alert('Success!');
      }
      )
    }
  }



  return (

    <div>
      <div className='flex flex-col items-center justify-center w-screen h-screen px-8'>
        <div className='text-2xl font-bold tracking-tight'>hi, welcome to placeholder</div>
        <div className='h-px w-full bg-black mt-4'></div>
        <div className='flex flex-col w-72 h-1/2'>
          <div className='cursor-pointer flex flex-row items-center rounded-full mt-4 p-8 border-2 border-black w-full h-2'>
            <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>
            <p className='ml-4 font-semibold'>Continue with Google</p>
          </div>
          <div className='cursor-pointer flex flex-row items-center rounded-full mt-4 p-8 border-2 border-black w-full h-2'>
            <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 384 512"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>            
            <p className='ml-4 font-semibold'>Continue with Apple</p>
          </div>
          <div className='text-center text-gray-500 my-4'>
            or
          </div>
          <div className='font-bold text-lg'>
            Sign up with your email address
          </div>
          <input type='email' name='email' placeholder='Enter your email.' ref={emailRef} className='signup-email rounded-md border-2 border-black w-76 h-12 pl-4 mt-4' />
          <input type='password' name='password' placeholder='Create a password.' ref={passwordRef} className='signup-password rounded-md border-2 border-black w-76 h-12 pl-4 mt-4' />
        </div>
        <div onClick={handleSubmit} className='cursor-pointer flex flex-row items-center justify-center rounded-full mt-4 p-8 border-2 border-black w-48 h-2'>
          <p className='font-semibold'>Sign Up</p>
        </div>
      </div>
    </div>
  )
}