
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