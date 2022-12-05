import React, { useEffect, useRef, useState } from 'react'
import styles from './search.module.css'
function Search() {
  const [visible, setVisible] = useState(false)
  const [timerForInputClear, setTimerForInputClear] = useState(null)
  const inputRef = useRef()
  useEffect(() => {
    if (visible) inputRef.current.focus()
  }, [visible])



  function showInput() {
    console.log(visible)
    if (visible) {
      let timeOutCounter = setTimeout(() => {
        console.log('timeout')
      }, 2000)
      console.log("start timeout")
      setTimerForInputClear(timeOutCounter)
    }
    else {
      clearTimeout(timerForInputClear)
    }
    setVisible(!visible)
  }
  return (
    <div className={`absolute mt-3 ml-3`}>
      <button className={`${styles.buttonRound}`} onMouseLeave={showInput} onMouseEnter={showInput}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>

      </button>
      <span>
        <input id="searchInput" type="text" ref={inputRef} className={`searchInput ${visible ? '' : 'hidden'} ${styles.searchInput}`} />
      </span>
    </div>
  )
}

export default Search