import React, { useState, useEffect } from 'react'
import Rating from '../../Rating'
import styles from './card.module.css'

const nopic = require('../../../defaults/pictures')

export default function Card({theme, recipe}) {
    console.log("🚀 ~ file: index.jsx ~ line 8 ~ Card ~ recipe", recipe)
    
    let picture = recipe?.picture || nopic.picture
    const [theRating, setTheRating]= useState([])
    
  return (
    <div className={`flex flex-col m-3 rounded-lg shadow-2xl drop-shadow-2xl hover:scale-110 bg-slate-600 ${styles["card-main"]}`}>
        <div className={`${styles["card-picture"]}`}>
            <img src={picture} alt=""  />
        </div>
        <div className={`${styles["card-header"]}`}>
            <div>
                <h2>{recipe.title}</h2>
            </div>
            <div>
                <h4 className={`italic font-light`}>{recipe.category}</h4>
            </div>
        </div>
        <hr></hr>
        <div className={`${styles["card-body"]}`}>
            <Rating rating={recipe.rating}/>
        </div>
        <hr></hr>
        <div className={`${styles["card-footer"]}`}>
            <div>{recipe.prep_time}</div>
            <div className={`font-semibold italic`}>{recipe.author}</div>
        </div>
    </div>
  )
}
