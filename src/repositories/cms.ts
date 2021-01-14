import type { Article, Response } from '@/types/cms'

const endpoint = process.env.CMS_ENDPOINT
const config = {
  headers: {
    'X-API-KEY': process.env.CMS_API_KEY,
  },
}

export const api = async <T>(url: string): Promise<T> => {
  const response = await fetch(url, config)
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  const json = await response.json()
  return json
}

export const fetchArticle = async (
  articleId: string
): Promise<Article | null> => {
  const url = `${endpoint}/${articleId}`
  try {
    const result = await api<Article>(url)
    return result
  } catch {
    return null
  }
}

export const fetchArticles = async (limit?: number): Promise<Article[]> => {
  const url = limit ? `${endpoint}?limit=${limit}` : endpoint
  const { contents } = await api<Response>(url)
  return contents
}
