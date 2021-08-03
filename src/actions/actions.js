
export const actions = {
    setInitialValue: (value) => ({type: 'INITIALIZE', value}),
    setArticles: (articles) => ({type: 'SET_ARTICLES', articles}),
    getArticle: (articleId) => ({ type: 'FETCH_ARTICLE', articleId}),
    setToCartList: (item) => ({type: 'SET_TO_CART', item}),
    setCartValue: (value) => ({type: 'SET_CART_VALUE', value}),
    deleteItem: (id) => ({type: 'DELETE_ITEM', id}),
    changePrice: (id, newCounter) => ({type: 'CHANGE_PRICE', id, newCounter}),
    fetchCartItems: () => ({type: 'FETCH_CART_ITEMS'}),
    fetchBlogItems: () => ({type: 'FETCH_BLOG_ITEMS'}),
    setNewItemToCart: (item) => ({type: "SET_NEW_ITEM_TO_CART", item}),
    deleteCartItem: (id) => ({ type: 'DELETE_CART_ITEM', id}),
    updateCartItemCount: (id, count) => ({type: 'UPDATE_CART_ITEM', id, count}),
    requestAllItems: () => ({type: 'FETCH_ITEMS'}),
    setAllItems: (items) => ({type: 'SET_ITEMS', items}),
    getItemById: (id) => ({type: 'GET_ITEM', id}),
    isFetchingHandler: (value) => ({type: 'CHANGE_FEATCHING', value}),
    setFilteredItems: (filteredItems) => ({type: 'SET_FILTERED_ITEMS', filteredItems}),
    setDecriptionItem: (item) => ({type: 'SET_DESC_ITEM', item})

}