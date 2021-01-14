export type Article = {
  id: string
  category: string
  text: string
  title: string
  thumbnail: {
    url: string
  }
  createdAt: string
  publishedAt: string
  revisedAt: string
  updatedAt: string
}

export type Response = {
  contents: Article[]
  limit: number
  offset: number
}
