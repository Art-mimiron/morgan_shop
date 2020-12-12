const initialState = {
    IsLoading: false,
    Categories: [],
    CategoryFilterID: ''
}

const productCategories = (state = initialState, action) => {
    switch (action.type) {
        case 'CATEGORIES_LOADING':
            return {...state, IsLoading: true}
        case 'CATEGORIES_LOADED':
            return {...state, IsLoading: false}
        case 'SET_CATEGORIES':
            return {...state, Categories: action.payload}
        case 'SET_CATEGORY_FILTER':
            return {...state, CategoryFilterID: action.payload}
        default:
            return state
    }
}

export default productCategories;