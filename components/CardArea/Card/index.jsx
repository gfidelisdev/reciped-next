import React, { useState, useEffect } from 'react'
import Rating from '../../Rating'
import styles from './card.module.css'

const nopic = require('../../../defaults/pictures')

export default function Card({theme, recipe}) {
    
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
            {recipe.rating}
            <Rating rating={recipe.rating}/>

            {/* <div className="rating rating-lg rating-half">
                <input readOnly type="radio" name="rating-10" className="rating-hidden" />
                <input readOnly type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
                <input readOnly type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                <input readOnly type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" checked />
                <input readOnly type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                <input readOnly type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
                <input readOnly type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                <input readOnly type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
                <input readOnly type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                <input readOnly type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
                <input readOnly type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
            </div> */}
        </div>
        <hr></hr>
        <div className={`${styles["card-footer"]}`}>
            <div>{recipe.prepTime}</div>
            <div className={`font-semibold italic`}>{recipe.author}</div>
        </div>
    </div>
  )
}
