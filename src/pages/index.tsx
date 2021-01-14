import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'

export const getStaticProps: GetStaticProps = async () => {
  const endpoint = process.env.CMS_ENDPOINT
  const config = {
    headers: {
      'X-API-KEY': process.env.CMS_API_KEY,
    },
  }
  const response = await fetch(`${endpoint}/articles?limit=10`, config)
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  const result = await response.json()

  return {
    props: {
      articles: result.contents,
    },
  }
}

type Props = {
  articles: any[]
}

const Home: NextPage<Props> = ({ articles }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <Link href={`/articles/${article.id}`}>
              <p>{article.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
