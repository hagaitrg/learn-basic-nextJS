import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
      <Layout pageTitle="Homepage">
        <Image src="/profile.jpg" width={300} height={200} alt="profile"/>
        <h1 className={styles['title-homepage']}>Welcome Hagai</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam fugit aliquam a ratione, saepe alias fugiat at nisi sequi eos obcaecati, vel et commodi. Et consectetur molestias odit minima! Soluta.</p>
      </Layout>
  )
}

export default Home
