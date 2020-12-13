const initialState = {
    IsLoading: true,
    renderSize: 12,
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
        case 'SHOW_MORE':
            return {...state, renderSize: action.payload}
        case 'RESET_SHOW_MORE':
            return {...state, renderSize: 12}
        default:
            return state
    }
}

export default productItems;