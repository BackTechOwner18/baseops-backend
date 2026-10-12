import { useState , useEffect } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import axios from 'axios'


function App() {
  
  const [APIdata , setAPI] = useState([])
  useEffect (() => {

    axios.get('/api/github')
    .then((response) => {
      setAPI(response.data)
    })
    .catch((error) => {
      console.log(error);
      
    })

  })


  return (
    <>
    
    <h1> BaseOps | AGES </h1>
    <h3> PEOPLE AND THEIR AGES </h3>
    {
      APIdata.map((age) => (
        <div key={age.id}> 
        <h2> Number {age.id} : {age.name}</h2>
        <h4 style={ {color : 'black'}}> AGE : {age.content}</h4> </div>
      ))
    }
    
    </>
  )

}

export default App
