import {combineReducers} from 'redux';

import productCategories from './categoriesReducer'

const rootReducer = combineReducers({
    productCategories
})

export default rootReducer;