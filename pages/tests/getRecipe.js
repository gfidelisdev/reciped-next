import React, { useEffect, useState } from 'react'
import RecipeController from '../../controllers/RecipeController'

function getRecipe() {

    const [recipe, setRecipe] = useState({})
    useEffect(() => {
      let recipeObj = new RecipeController()
      recipeObj.get(1).then(response=>{
        setRecipe(response)
        console.log(response)
      })
    
      return () => {
      }
    }, [])
    
  return (
    <div>getRecipe</div>
  )
}

export default getRecipe