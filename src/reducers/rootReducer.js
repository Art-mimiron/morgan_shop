import {combineReducers} from 'redux';

import productCategories from './categoriesReducer'
import productItems from './productsReducer'
import cart from './cartReducer'
import usersData from './usersDataReducer'
import searchBar from './searchReducer'

const rootReducer = combineReducers({
    productCategories,
    productItems,
    cart,
    usersData,
    searchBar
})

export default rootReducer;