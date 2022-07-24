import Head from 'next/head'
import Image from 'next/image'
import BannerArea from '../components/BannerArea'
import CardArea from '../components/CardArea'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
        <BannerArea />
        <CardArea title="Receitas" />
        <CardArea title="Autores" />
    </>
  )
}
