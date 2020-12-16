import {combineReducers} from 'redux';

import productCategories from './categoriesReducer'
import productItems from './productsReducer'
import cart from './cartReducer'
import usersData from './usersDataReducer'

const rootReducer = combineReducers({
    productCategories,
    productItems,
    cart,
    usersData
})

export default rootReducer;