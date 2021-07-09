export interface articleInfo {
    article_info:{
        title: string,
        link_url: string,
        digg_count: number,
        view_count: number,
        article_id: string
    },
    author_user_info:{
        user_name: string
    },
    tags: Array<{
        tag_name: string
    }>
}
export interface formatedArticleInfo {
    title: string,
    linkUrl: string,
    diggCount: number,
    viewCount: number,
    hotCount: number,
    author: string
}