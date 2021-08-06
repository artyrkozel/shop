
let initialState = {
    initialize: true,
    btnType: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INITIALIZE':
            return {
                ...state,
                initialize: action.value
            }
            case 'SET_BTN_VALUE':
            return {
                ...state,
                btnType: action.value
            }
        default:
            return state
    }
}

export default appReducer