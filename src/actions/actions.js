import Axios from 'axios'

import emailValidation from '../utils/emailValidation'
import passValidation from '../utils/passValidation'

// Product Categories GET

const categoriesLoading = () => ({type: 'CATEGORIES_LOADING'})

const categoriesLoaded = () => ({type: 'CATEGORIES_LOADED'})

const setCategories = (categories) => ({
    type: 'SET_CATEGORIES',
    payload: categories
})

export const getCategories = () => {
    return (dispatch) => {
        dispatch(categoriesLoading());
        Axios.get('https://morgan-shop.herokuapp.com/categories')
        .then( (data) => {
            dispatch(setCategories(data.data.categories));
            dispatch(categoriesLoaded());
        })
        .catch((e) => console.log(`cant load ${e}`) )
    }
}

// Product Items GET

const productsLoading = () => ({type: 'PRODUCTS_LOADING'})

const productsLoaded = () => ({type: 'PRODUCTS_LOADED'})

const setProducts = (products) => ({
    type: 'SET_PRODUCTS',
    payload: products
})

export const getProducts = () => {
    return (dispatch) => {
        dispatch(productsLoading());
        Axios.get('https://morgan-shop.herokuapp.com/products')
        .then( (data) => {
            dispatch(setProducts(data.data.products));
            dispatch(productsLoaded());
        })
        .catch((e) => console.log(`cant load ${e}`) )
    }
}

// Filter items by category

export const categoryFilter = (categoryID) => ({
    type: 'SET_CATEGORY_FILTER',
    payload: categoryID
})

// Toggle mobile nav menu

export const navMenuToggle = () => ({
    type: 'TOGGLE_NAV_MENU'
})

// Show more products

export const showMore = (num) => ({
    type: 'SHOW_MORE',
    payload: num + 8
})

export const resetShowCount = () => ({
    type: 'RESET_SHOW_MORE',
})

// cart

export const buyItem = (item) => ({
    type: 'BUY_ITEM',
    payload: {...item, counter: 1}
})

export const decreseItem = (id) => ({
    type: 'DECREASE_ITEM',
    payload: id
})

export const removeItem = (id) => ({
    type: 'REMOVE_ITEM',
    payload: id
})

export const setItemCount = (target) => ({
        type: 'SET_ITEM_COUNT',
        payload: target
}) 

export const cleanCart = () => ({
        type: 'CLEAN_CART'
})

// sort items + show more

export const sortProducts = (sortType) => ({
        type: 'SORT_PRODUCTS',
        payload: sortType
})

export const modalCartTrigger = () => ({
        type: 'MODAL_RENDER' 
})

// user account 

 export const loginAccout = (mail) => ({
        type: 'USER_LOGIN',
        payload: emailValidation(mail)
 })

 export const loginPassword = (pass) => ({
        type: 'USER_PASSWORD',
        payload: passValidation(pass)
 })

 export const toglePassVisibility = () => ({
        type: 'TOGLE_PASS_VISIBILITY'
 })

 // scroll arrow toggle

 export const toggleScrollArrow = (direction) => ({
        type: 'SCROLL_ARROW_TOGGLE',
        payload: direction
 })

 // searchBar actions

 export const toggleSearchBar = () => ({
        type: 'TOGGLE_SEARCHBAR',
        payload: ''
 })

 export const generateSearchQuery = (e) => ({
        type: 'GENERATE_SEARCH_QUERY',
        payload: e.target.value
 })