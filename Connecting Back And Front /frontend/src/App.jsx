import { useState , useEffect} from 'react'

import './App.css'

function App() {
  const [jokes, setJokes] = useState([])
 
  

  const fetchJokes = async () =>{
    
    const response = await fetch('/api/jokes');
    const data = await response.json() ;
    setJokes(data) ;
  }

  useEffect(()=>{   
   fetchJokes() ;
  
  })

  return (
    <>
     {
      jokes.map((joke)=>{



        return <div>
          
          <br />
          
          <h2><span>{joke.id}</span> {joke.joke}</h2>
        </div>



      })
     }
    </>
  )
}

export default App
