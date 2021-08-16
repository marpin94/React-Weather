import React, { useContext, useEffect, useReducer, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { SearchBar } from './components/SearchBar'
import {Nav} from './components/Nav'




const App = () => {
 
  const [faren, setFaren] = useState(false)
  const handleClick = (e) => {
    e.preventDefault()
    setFaren(!faren)
}

  return(
  <div>
    
    <Nav />
    <button type="button" className="btn btn-secondary d-flex align-self-end" onClick={handleClick} > Toggle C/F </button> 
    <div className='container'>
      <SearchBar faren={faren}/>
 
    </div>
    
  </div>
  )
}
export default App