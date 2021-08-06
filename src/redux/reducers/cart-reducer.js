
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