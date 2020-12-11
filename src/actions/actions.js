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