import { useRouter } from 'next/router'
import React from 'react'


function RecipeById() {
    const router = useRouter()
  return (
    <div>RecipeById {router.query.id}</div>
  )
}
export default RecipeById