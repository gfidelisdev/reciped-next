import React, { useEffect, useState } from "react";
import Card from "./Card";
let recipe = {
  id: 1,
  title: 'Bolinho',
  category: 'Bolos',
  prepTime: '1h45min',
  author: 'Guilherme',
  rating:'4.7'
}
export default function CardArea({title, items}) {
  const [itemsComp, setItemsComp]=useState([])
  useEffect(() => {
    if (items){

      setItemsComp(items)
    }
    console.log("🚀 ~ file: index.jsx ~ line 15 ~ useEffect ~ items", items)
    console.log("🚀 ~ file: index.jsx ~ line 16 ~ useEffect ~ itemsComp", itemsComp)
    return () => {
    }
  }, [])
  
  
  return (
    <div className="my-4">
      <div className="flex flex-wrap justify-center">
        <h1 className="text-4xl">{title}</h1>
      </div>
      <div className="flex flex-wrap">

        {itemsComp.map(item=>{
          <Card recipe={item}/>
        })}
      </div>
    </div>
  );
}
