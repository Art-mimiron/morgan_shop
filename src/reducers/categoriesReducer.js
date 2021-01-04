const initialState = {
    IsLoading: false,
    Categories: [],
    CategoryFilterID: '',
    NavMenuShow: false
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
        case 'TOGGLE_NAV_MENU':
            return {...state, NavMenuShow: !state.NavMenuShow}
        default:
            return state
    }
}

export default productCategories;