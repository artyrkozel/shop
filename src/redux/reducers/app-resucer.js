export const setInitialValue = (value) => {
    return {
        type: 'INITIALIZE',
        value
    }
}

let initialState = {
    initialize: true,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INITIALIZE':
            return {
                ...state,
                initialize: action.value
            }
        default:
            return state
    }
}

export default appReducer