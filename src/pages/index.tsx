import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { fetchArticles } from '@/repositories/cms'
import { Article } from '@/types/cms'
import styles from '@/styles/Home.module.css'

export const getStaticProps: GetStaticProps = async () => {
  const articles = await fetchArticles(10)

  return {
    props: {
      articles,
    },
  }
}

type Props = {
  articles: Article[]
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
