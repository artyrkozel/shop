

export const setToCartList = (item) => {
    return {
        type: 'SET_TO_CART',
        item
    }
}

export const setCartValue = (value) => {
    return {
        type: 'SET_CART_VALUE',
        value
    }
}

export const deleteItem = (id) => {
    return {
        type: 'DELETE_ITEM',
        id
    }
}

export const changePrice = (id, newCounter) => {
    return {
        type: 'CHANGE_PRICE',
        id, newCounter
    }
}

export const fetchCartItems = () => {
    return{
        type: 'FETCH_CART_ITEMS'
    }
}

export const fetchBlogItems = () => {
    return{
        type: 'FETCH_BLOG_ITEMS'
    }
}

export const setNewItemToCart = (item) => {
    return{
        type: "SET_NEW_ITEM_TO_CART",
        item
    }
}

export const deleteCartItem = (id) => {
    return {
        type: 'DELETE_CART_ITEM',
        id
    }
}

export const updateCartItemCount = (id, count) => {
    return {
        type: 'UPDATE_CART_ITEM',
        id, count
    }
}

let initialState = {
    cart: [],
    cartValue: null,
    totalCount: 0
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TO_CART':
            return {
                ...state,
                cart: [...action.item],
                cartValue: state.cart.length
            }
        case 'SET_CART_VALUE':
            return {
                ...state,
                cartValue: action.value
            }
        case 'DELETE_ITEM':
            return {
                ...state,
                cart: [...state.cart.filter(item => item._id !== action.id)]
            }
        case 'CHANGE_PRICE':
            return {
                ...state,
                cart: state.cart.map(el => el._id === action.id ? {...el, count: action.newCounter} : el)
            }
        default:
            return state
    }
}

export default cartReducer