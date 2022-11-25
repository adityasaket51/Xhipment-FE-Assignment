import React from 'react'

const Login = () => {
  return (
    <div className='login-container'>
        <input className='input' type="text" placeholder='Enter your Email'/>
        <input className='input' type="password" placeholder='password'/>
        <button className='button'>Log In</button>
    </div>
  )
}

export default Login