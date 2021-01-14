import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { fetchArticles } from '@/repositories/cms'
import type { Article } from '@/types/cms'
import styles from '@/styles/Home.module.css'

type Props = {
  articles: Article[]
}

export const getStaticProps: GetStaticProps = async () => {
  const articles = await fetchArticles(10)

  return {
    props: {
      articles,
    },
  }
}

const Home: NextPage<Props> = ({ articles }) => (
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

export default Home
