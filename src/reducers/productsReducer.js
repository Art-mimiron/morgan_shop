const initialState = {
    IsLoading: true,
    Products: []
}

const productItems = (state = initialState, action) => {
    switch (action.type) {
        case 'PRODUCTS_LOADING':
            return {...state, IsLoading: true};
        case 'PRODUCTS_LOADED':
            return {...state, IsLoading: false};
        case 'SET_PRODUCTS':
            return {...state, Products: action.payload};
        default:
            return state
    }
}

export default productItems;