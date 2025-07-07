import React, { useEffect, useState } from 'react'

const App = () => {
  const [quotes,setQuotes] = useState([]);

  useEffect(()=>{
    fetch('https://dummyjson.com/quotes')
    .then(resp =>resp.json())
    .then(data=>{
      setQuotes(data.quotes.slice(0,10));
    })
    .catch(e => console.log('error:',e))
  },[]);
  return (
    <div>
      {quotes.map((quote) => (
        <h1 key={quote.id}>{quote.quote}</h1>
      ))}
    </div>
  )
}

export default App
