import {combineReducers} from 'redux';

import productCategories from './categoriesReducer'
import productItems from './productsReducer'
import cart from './cartReducer'

const rootReducer = combineReducers({
    productCategories,
    productItems,
    cart
})

export default rootReducer;