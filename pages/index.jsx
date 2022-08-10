import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import BannerArea from '../components/BannerArea'
import CardArea from '../components/CardArea'
import RecipeController from '../controllers/RecipeController'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [featuredReceitas, setFeaturedReceitas] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    async function getRecipes(){
      let recipeController = new RecipeController()
      let  recipes = await recipeController.listFeatured()
      recipes = recipes.data
      setFeaturedReceitas(await recipes)
      setLoading(false)
    }
    getRecipes()
  }, [])
  
  if (loading){
    return <div>carregando...</div>
  }
  return (
    <>
        <BannerArea />
        <CardArea title="Receitas" items={featuredReceitas} />
        <CardArea title="Autores" items={[]}/>
    </>
  )
}
