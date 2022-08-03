import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import RecipeController from '../../controllers/RecipeController'
import useAxios from '../../hooks/useAxios'

function getRecipe() {

    const [recipes, setRecipes] = useState([])
    async function getRecipe(id){
      return await useAxios(`/api/recipes/${id}`, 'get')
    }
    useEffect(() => {
      getRecipe(1).then(response=>{
        console.log(`%c`,"color:red", response)
        setRecipes(response.data)

      })
      return () => {
      }
    }, [])
    
  return (
    <div>
      {recipes.map(recipe=>{
        let url = URL.createObjectURL(recipe.photo)
        return (
            <div>
              <div>{recipe.title}</div>
              <img id={`img-${recipe.id}`} src={url} />
            </div>
        )
      })}
    </div>
  )
}

export default getRecipe