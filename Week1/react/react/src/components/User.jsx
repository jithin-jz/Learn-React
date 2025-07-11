import React, { useState } from 'react'

const user = () => {

    const [username,setUserName] = useState('')
    const [password,setPassword] = useState('')
  return (
    <div>
      <form>
        <input type="text" placeholder='Enter your name' value={username} />
        <input type="password" placeholder='Enter your password' value={password} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default user
