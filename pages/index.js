import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Layout.module.css'

export default function Home() {
  return (
    <Layout>
      <h1> Homepage</h1>
      <a href='/about'> About </a>
      </Layout>
  )
}
