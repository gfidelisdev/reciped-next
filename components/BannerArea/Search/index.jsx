import React, { useEffect, useRef, useState } from 'react'
import styles from './search.module.css'
function Search() {
  const [visible, setVisible]=useState(false)
  const inputRef = useRef()

  useEffect(() => {
    if (visible) inputRef.current.focus()
  }, [visible])
  
  function showInput(){
    setVisible(!visible)
  }
  return (
    <div className={`absolute mt-3 ml-3`}>
      <button className={`${styles.buttonRound}`} onClick={showInput}>Clicker</button>
      <span>
        <input id="searchInput" type="text" ref={inputRef} className={`searchInput ${visible?'':'hidden'} ${styles.searchInput}`} />
      </span>
    </div>
  )
}

export default Search