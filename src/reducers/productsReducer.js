const initialState = {
    IsLoading: true,
    renderSize: 12,
    Products: [],
    sortType: 'Newness',
    scrollArrow: 'bottom'
}

const productItems = (state = initialState, action) => {
    switch (action.type) {
        case 'PRODUCTS_LOADING':
            return {...state, IsLoading: true};
        case 'PRODUCTS_LOADED':
            return {...state, IsLoading: false};
        case 'SET_PRODUCTS':
            return {...state, Products: action.payload.sort((a,b) => new Date(b.timeStamp) - new Date(a.timeStamp))};
        case 'SHOW_MORE':
            return {...state, renderSize: action.payload}
        case 'RESET_SHOW_MORE':
            return {...state, renderSize: 12}
        case 'SORT_PRODUCTS':
            return {...state, sortType: action.payload, Products: [...state.Products.sort((a,b) => {
                        switch(action.payload) {
                            case 'Newness':
                                return new Date(b.timeStamp) - new Date(a.timeStamp);
                            case 'Hight_price':
                                return b.price - a.price;
                            case 'Low_price':
                                return a.price - b.price;
                            default:
                                return state;
                        }
                    })]}
        case 'SCROLL_ARROW_TOGGLE':
            return {...state, scrollArrow: action.payload}
        default:
            return state
    }
}

export default productItems;

