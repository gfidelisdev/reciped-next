import React, { useEffect, useState } from 'react'

function Rating({rating}) {
  const [objRows, setObjRows] = useState([])
  useEffect(() => {
    let i=0
    let tmpObjRows = []
    console.log(`%c ${rating*2}`,'color:green')
    for (i=1;i<=rating*2;i++){
      console.log(`%c ${i}`,'color:green')
      if (i%2==0){
        console.log(`%c ${i} resto zero`,'color:green')
        
        tmpObjRows.push(<input type="radio" disabled key={`star-${i}`} name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />)
      }
      else {
        console.log(`%c ${i} resto um`,'color:green')
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