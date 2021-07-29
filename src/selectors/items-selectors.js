
export const getMovieList = (state) => state.items.items

export const getItem = (state) => {
    return state.items.descriptionItem
}

export const getCartValue = (state) => {
    return state.cart.cartValue
}

export const getCartItems = (state) => {
    return state.cart.cart
}

export const getArticles = (state) => {
    return state.blog.articles
}

export const getIsFeatchingValue = (state) => {
    return state.items.isFetching
}

export const getFilteredArr = (state) => {
    return state.items.filteredItems
}
