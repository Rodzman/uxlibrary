export interface Links {
    meta: Meta,
    category: string,
    comments: number,
    created_at?: number,
    upvotes: number,
    isOwner?: boolean
}

export interface Meta {
    author: string,
    title: string,
    url: string
}
