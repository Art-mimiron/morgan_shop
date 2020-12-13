import Products from "../components/Products/Products"


const cart = (state = [], action) => {
    switch (action.type) {
        case 'BUY_ITEM':
            return [...state, action.payload]
        case 'REMOVE_ITEM':
            return [...state.filter(item => item.id !== action.payload)]
        default:
            return state
    }
}

export default cart;