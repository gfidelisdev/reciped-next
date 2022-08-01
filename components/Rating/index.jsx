import React, { useEffect, useState } from 'react'

function Rating({rating}) {
  const [objRows, setObjRows] = useState([])
  useEffect(() => {
    let i=0
    let tmpObjRows = []
    console.log(`%c ${Math.round(rating*2)}`,'color:green')
    for (i=1;i<=Math.round(rating*2);i++){
      if (i%2==0){
        
        tmpObjRows.push(<input type="radio" disabled key={`star-${i}`} name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />)
      }
      else {
        tmpObjRows.push(<input type="radio" disabled key={`star-${i}`} name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />)
      }
    }
    setObjRows(tmpObjRows)
    
    return () => {
    }
  }, [])
  
  return (
    <div  className="rating rating-lg rating-half">
      {objRows.map(obj=>obj)}
    </div>
  )
}

export default Rating