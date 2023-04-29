import React from 'react'
import './SignUp.css'

const SignUp = () => {
  return (
    <div className='signup'>
      <form>
        <h1>Sign In</h1>
        <input type="email" placeholder='Email' />
        <input type="password" placeholder='Password' />
        <button type='submit'>Sign In</button>
      </form>
    </div>
  )
}

export default SignUp
