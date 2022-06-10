import React, {useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { SearchBar } from './components/SearchBar'
import {Nav} from './components/Nav'

import styles from './styles/Home.module.css'
import './style.css'


const App = () => {
 
  const [faren, setFaren] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    setFaren(!faren)
  }

  return(
    <div className={styles.container}>
      <Nav />
      <button type="button" className={styles.farenBtn} onClick={handleClick} > Toggle C/F </button> 
      <div className='container'>
        <SearchBar faren={faren}/>
      </div>
    </div>
  )
}
export default App