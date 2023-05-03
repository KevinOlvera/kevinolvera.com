export interface Post {
    id: number
    title: string
    description: string
    content: string
    coverImage: string
    coverAttribution: string
    slug: string
    creationDate: string
    updatedDate: string
    url: string
    readingTime: string
    views: number
    tags: string[]
    author: string
}
