import {combineReducers} from 'redux';

import productCategories from './categoriesReducer'
import productItems from './productsReducer'

const rootReducer = combineReducers({
    productCategories,
    productItems
})

export default rootReducer;