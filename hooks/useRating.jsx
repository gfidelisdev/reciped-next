import React, {useEffect} from 'react'

export default function useRating(rating) {
    let i=0
    let objRows = []
    useEffect(() => {
        for (i=0;i<rating;i=i+1){
            objRows.push(<div>i</div>)
        }
      return () => {
      }
    }, [])
    
  return (
    <>
        {objRows.map(obj=>obj)}
    </>
  )
}