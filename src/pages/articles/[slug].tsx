import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { fetchArticles, fetchArticle } from '@/repositories/cms'
import { Article } from '@/types/cms'
import styles from '@/styles/Home.module.css'

type Params = {
  slug: string
}
type Props = {
  article: Article
}

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = await fetchArticles()
  const paths = articles.map(({ id }) => `/articles/${id}`)
  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const articleId = (params as Params).slug as string
  const article = await fetchArticle(articleId)

  return {
    props: {
      article,
    },
  }
}

const Home: NextPage<Props> = ({ article }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{article.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <article>
        <h1>{article.title}</h1>
        <p>カテゴリ: {article.category}</p>
        <p>作成日時: {article.publishedAt}</p>
        <img
          src={article.thumbnail.url}
          alt="サムネイル"
          width="400"
          height="200"
        />
        <div dangerouslySetInnerHTML={{ __html: article.text }} />
      </article>
    </div>
  )
}

export default Home
