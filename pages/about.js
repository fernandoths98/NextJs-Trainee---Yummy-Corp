
import { useRouter } from 'next/router'
import Layout from '../components/Layout';
import styles from '../styles/Layout.module.css'

export default function AboutPage() {

    const router = useRouter()
    console.log(router);

    return (
        <Layout title='About DJ Events'>
            <h1> About a NextJs </h1>  
            {/* <a href="/"> Homepage </a> */}
            <button onClick={() => router.push('/')}> Home </button>
        </Layout>
    )
}
