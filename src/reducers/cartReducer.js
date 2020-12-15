const initialState = {
    cart: [],
    renderModal: false
}

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'BUY_ITEM':
            if (state.cart.some(elem => elem.id === action.payload.id)) {
                state.cart[state.cart.findIndex(elem => elem.id === action.payload.id)].counter++;
                return {...state}
            } else return {...state, cart: [...state.cart, action.payload]};
            
        case 'DECREASE_ITEM':
            if (state.cart[state.cart.findIndex(elem => elem.id === action.payload)].counter > 1) {
                state.cart[state.cart.findIndex(elem => elem.id === action.payload)].counter--;
                return {...state}
            } else return {...state, cart: [...state.cart.filter(item => item.id !== action.payload)]}
        case 'REMOVE_ITEM':
            return {...state, cart: [...state.cart.filter(item => item.id !== action.payload)]}
        case 'MODAL_RENDER':
            return {renderModal: !state.renderModal, cart: [...state.cart]}
        case 'SET_ITEM_COUNT':
            return
        default:
            return state
    }
}

export default cart;