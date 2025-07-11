import React from 'react'
import Title from './Title'
import Footer from './Footer'
import { useState } from 'react'

const Home = () => {

     const [language,setLanguage] = useState('python')
     const  [name,setName] = useState({name:"Akshay"})
     const [work,changeWork] = useState('web developer')

      const logData = (x,y) =>{
        console.log("Data");
        console.log(x,y);
      }

  return (
      



    <div>
        <Title framewrok = "jithin" language = "python">tutorial</Title>

        <Title framewrok = "anand" language = "java">tutorial</Title>

        <button onClick={()=>logData(10,20)}>Click</button>

        <button onClick={()=>changeWork('devops')}>switch job</button>

<br />
        {language}
        <br />
        {name.name}
        {work}

<br />
        <button onClick={()=>setName(prv=>!prv)}>chnage name</button>
        <button onClick={()=>setLanguage('java')}>change value</button>
<br />
    </div>
  )
}

export default Home