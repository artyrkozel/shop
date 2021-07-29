
export const setArticles = (articles) => {
    return {
        type: 'SET_ARTICLES',
        articles
    }
}

export const getArticle = (articleId) => {
    return{
        type: 'FETCH_ARTICLE',
        articleId
    }
}

let initialState = {
    articles: [],
}

const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ARTICLES':
            return {
                ...state,
                articles: [...action.articles]
            }
            case 'FETCH_ARTICLE':
                return {
                    ...state
                }
        default:
            return state
    }
}

export default blogReducer