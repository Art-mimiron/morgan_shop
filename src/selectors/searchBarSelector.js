import { createSelector } from 'reselect';

const getSearchQuery = (state) => state.searchBar.query;
const getAllProducts = (state) => state.productItems.Products;


const searchResults = createSelector (
    [getAllProducts, getSearchQuery] ,
    (products, query) => {
        if (query.length === 0) {
            return products;
        } 
        return products.filter((item) => {
            return JSON.stringify(item.name).toLowerCase().indexOf(query.toLowerCase()) > -1;
        })
    }
)

export default searchResults;