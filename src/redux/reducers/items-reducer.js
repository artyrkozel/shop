export const requestAllItems = () => {
    return {
        type: 'FETCH_ITEMS',
    }
}

export const setAllItems = (items) => {
    return {
        type: 'SET_ITEMS',
        items
    }
}

export const getItemById = (id) => {
    return {
        type: 'GET_ITEM',
        id
    }
}

export const isFetchingHandler = (value) => {
    return {
        type: 'CHANGE_FEATCHING',
        value
    }
}

export const setFilteredItems = (filteredItems) => {
    return {
        type: 'SET_FILTERED_ITEMS',
        filteredItems
    }
}

export const setDecriptionItem = (item) => {
    return {
        type: 'SET_DESC_ITEM',
        item
    }
}

let initialState = {
    items: null,
    descriptionItem: null,
    isFetching: false,
    filteredItems: [],
}

const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ITEMS':
            return {
                ...state,
                items: action.items,
            }
            case 'GET_ITEM':
                return {
                    ...state,
                    descriptionItem: state.items.filter(el => el._id === action.id)
                }
                case 'CHANGE_FEATCHING':
                    return {
                        ...state,
                        isFetching: action.value
                    }
                    case 'SET_FILTERED_ITEMS':
                        return {
                            ...state,
                            filteredItems: action.filteredItems
                        }
                        case 'SET_DESC_ITEM':
                            return {
                                ...state,
                                descriptionItem: action.item
                            }
                        default:
                            return state
    }
}

export default itemsReducer