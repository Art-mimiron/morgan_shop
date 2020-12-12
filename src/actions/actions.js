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