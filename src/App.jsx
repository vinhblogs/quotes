import React, { useEffect, useState } from 'react'

const App = () => {
  const[quotes,setQuotes]=useState([])
  const[quote,setQuote]=useState("")

  // call api
  useEffect(()=>{
    fetch("https://type.fit/api/quotes")
    .then(res=>res.json)
    .then(data=>{
      setQuotes(data);
      setQuote(data[0])
    })
  },[])

  const getRandom=(quotes)=> {
    
    console.log("random:::",quotes[Math.floor(Math.random()*quotes.length)]);
    return quotes[Math.floor(Math.random()*quotes.length)]
  }

  const getNewQuotes=()=>{
    setQuote(getRandom(quotes))
  }


  return (
    <div className='container'>
      <h1>Project Quote generator</h1>
      <section>
        <button onClick={getNewQuotes}>new quote</button>
        <h3>
          <span>"</span>
          {quote?.text}
          {console.log("data:::",quote.text)}
          <span>"</span>
        </h3>
        <i>- {quote?.author}</i>

      </section>
    </div>
  )
}

export default App
