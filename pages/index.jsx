import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import BannerArea from '../components/BannerArea'
import CardArea from '../components/CardArea'
import FilterArea from '../components/FilterArea'
import RecipeController from '../controllers/RecipeController'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [featuredReceitas, setFeaturedReceitas] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    async function getRecipes(){
      let  recipes = await RecipeController.listFeatured()
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
        <FilterArea />
        <BannerArea />
        <CardArea title="Receitas" items={featuredReceitas} />
        <CardArea title="Autores" items={[]}/>
    </>
  )
}
