import React from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'

import * as actions from '../../actions/actions'

const Cart = ({cart, category, removeItem, buyItem, decreseItem, setItemCount}) => {
    if (cart.cart.length !== 0) {
        return (
            <div className="Cart">
                <div className="Cart-Title">CART</div>
                <ul className="Cart-List">
                    {cart.cart.map((product) => {
                        return (
                            <li className="Cart-Item" key={product.id}>
                                <img src={product.image} alt={product.alias} className="Cart-Picture"/>
                                <div className="Cart-Inner">
                                    <div className="Cart-Header">
                                        <div className="Cart-Info">
                                            <div className="Cart-Category">{
                                                category[category.findIndex(el=>el.id === product.categoryId)].title
                                            }</div>
                                            <div className="Cart-Name">{product.name}</div>
                                        </div>
                                        <button 
                                        className="Cart-Remove"
                                        onClick={()=>removeItem(product.id)}>
                                            x
                                        </button>
                                    </div>
                                    <div className="Cart-Footer">
                                        <div className="Cart-Amount">
                                            <div className="Cart-Quantity">Quantity</div>
                                            <button 
                                            className="Cart-Decrease"
                                            onClick={()=>decreseItem(product.id)}>
                                                -
                                            </button>
                                            <input 
                                            type="number" 
                                            className="Cart-Count" 
                                            value={product.counter}
                                            onChange={(e)=>console.log(e)}/>
                                            <button 
                                            className="Cart-Increase"
                                            onClick={()=>buyItem(product)}>
                                                +
                                            </button>
                                        </div>
                                        <div className="Cart-Price">${product.price*product.counter}.00</div>
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    } else {
        return (
            <div className="EmptyCart">
                <div className="EmptyCart-Header">CART</div>
                <img src="../icons/empty_cart.png" alt="empty_cart" className="EmptyCart-Picture"/>
                <div className="EmptyCart-Subheader">Your cart is empty</div>
                <button ></button>
                <NavLink to='/' className="EmptyCart-Button" >START SHOPPING</NavLink>
            </div>
        )
    }
};

const mapStateToProps = (state) => ({
    cart: state.cart,
    category: state.productCategories.Categories
})

export default connect(mapStateToProps, actions)(Cart)