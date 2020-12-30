import React from 'react'
import {connect} from 'react-redux'

import * as actions from '../../actions/actions'

import searchResults from '../../selectors/searchBarSelector'

const SearchItems = ({products, cart, removeItem, buyItem}) => {
    return (
        <div className='ModalCart ModalCart_searchbar'>
                <div className="ModalCart-Wrapper">
                    <ul className="ModalCart-List ModalCart-List_searchbar">
                        {products.map((product) => {
                            return (
                                <li className="ModalCart-Item" key={product.id}>
                                    <img src={'https://morgan-shop.herokuapp.com'+product.image} alt={product.alias} className="ModalCart-Picture"/>
                                    <div className="ModalCart-Description">
                                        <div className="ModalCart-Name">{product.name}</div>
                                        <div className="ModalCart-Price"><span className='ModalCart-Count'>{product.counter} x</span> £{product.price}.00</div>
                                    </div>
                                    <button 
                                        className={cart.cart.some(elem => elem.id === product.id) ? 
                                        'Product-Btn Product-Btn_search Product-Btn_remove' : 
                                        'Product-Btn Product-Btn_search'}
                                        onClick={cart.cart.some(elem => elem.id === product.id) ? 
                                        () => {removeItem(product.id)} : 
                                        () => {buyItem(product)}}>
                                    </button>
                                </li>
                            )
                        })}
                    </ul>
                </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    products: searchResults(state),
    cart: state.cart
})

export default connect(mapStateToProps, actions)(SearchItems)