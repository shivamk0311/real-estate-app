import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up </h1>
      <form className='flex flex-col gap-4'>
        <input type='text' placeholder='Username' className='border rounded-lg p-3 bg-white' id='usename'/>
        <input type='text' placeholder='Email' className='border rounded-lg p-3 bg-white' id='email'/>
        <input type='text' placeholder='Password' className='border rounded-lg p-3 bg-white' id='password'/>
        <button className='bg-amber-950 text-white uppercase p-3 rounded-lg hover:opacity-85 disabled:opacity-65'>sign up</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
        <Link to='/sign-in'>
          <span className='text-blue-700'>Sign In</span>
        </Link>
      </div>
    </div>
  )
}
