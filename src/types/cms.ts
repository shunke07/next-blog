export type Article = {
  id: string
  category: string
  text: string
  title: string
  thumbnail: {
    url: string
  }
  createdAt: Date
  publishedAt: Date
  revisedAt: Date
  updatedAt: Date
}
export type Response = {
  contents: Article[]
  limit: number
  offset: number
}
