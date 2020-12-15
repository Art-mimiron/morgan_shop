import Axios from 'axios'

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
            console.log(data)
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
            console.log(data)
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

export const removeItem = (id) => ({
    type: 'REMOVE_ITEM',
    payload: id
})

export const sortProducts = (sortType) => ({
        type: 'SORT_PRODUCTS',
        payload: sortType
})

export const modalCartTrigger = () => ({
        type: 'MODAL_RENDER' 
})