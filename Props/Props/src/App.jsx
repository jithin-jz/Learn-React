import React from 'react'
import Student from './Student'

const App = () => {
  return (
    <div>
      <Student name='jithin' age ={22} isStudent={false}/>
      <Student name='anand' age = {24} isStudent={true}/>
      <Student name='abhinav' age = {25} isStudent={false}/>
      <Student name='adarsh' age = {15} isStudent={true}/>
      <Student name='amal'/>

    </div>
  )
}

export default App
