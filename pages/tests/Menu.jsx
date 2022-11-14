import React, { useState } from 'react'

function Menu() {
    const [exp, setExp] = useState(false)
    
    function expandir(){
        let el = document.getElementById("rightColumn")
        if (exp){
            el.classList.remove("right-expanded")
        }
        else {
            el.classList.add("right-expanded")
        }
        setExp(!exp)
    }
  return (
    <div>
        <div className="left">one</div>
        <div className="center">two</div>
        <div className="expand">
            <button onClick={expandir}>===</button>
        </div>
        <div id="rightColumn" className="right">three</div>
    </div>
  )
}

export default Menu