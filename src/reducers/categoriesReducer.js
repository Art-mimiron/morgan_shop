const initialState = {
    IsLoading: false,
    Categories: []
}

const productCategories = (state = initialState, action) => {
    switch (action.type) {
        case 'CATEGORIES_LOADING':
            return {...state, IsLoading: true}
        case 'CATEGORIES_LOADED':
            return {...state, IsLoading: false}
        case 'SET_CATEGORIES':
            return {...state, Categories: action.payload}
        default:
            return state
    }
}

export default productCategories;