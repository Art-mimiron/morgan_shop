import {createSelector} from 'reselect'

const getFilterID = (state) => state.productCategories.CategoryFilterID
const getAllProducts = (state) => state.productItems.Products

const categoryFilter = createSelector (
    [getAllProducts, getFilterID], 
    (products, filterID) => {
        if (filterID.length === 0) {
            return products;
        }

        return products.filter(product =>  product.categoryId === filterID )
    }
)

export default categoryFilter;