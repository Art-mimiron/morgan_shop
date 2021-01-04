import React from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'

import * as actions from '../../actions/actions'

import ecart from '../../img/ecart.png'

const Cart = ({cart, category, removeItem, buyItem, decreseItem, setItemCount, cleanCart}) => {
    if (cart.cart.length !== 0) {
        return (
            <div className="Cart">
                <div className="Cart-Title">CART</div>
                <ul className="Cart-List">
                    {cart.cart.map((product) => {
                        return (
                            <li className="Cart-Item" key={product.id}>
                                <img src={'https://morgan-shop.herokuapp.com'+product.image} alt={product.alias} className="Cart-Picture"/>
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
                                            data-id={product.id}
                                            onChange={(e)=>setItemCount(e.target)}/>
                                            <button 
                                            className="Cart-Increase"
                                            onClick={()=>buyItem(product)}>
                                                +
                                            </button>
                                        </div>
                                        <div className="Cart-Price">£{product.price*product.counter}.00</div>
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
                <div className="Cart-Order">
                    <div className="Cart-Summary">Order Summary</div>
                    <ul className="Cart-OrderList">
                        {cart.cart.map((product) => {
                            return (
                                <li className="Cart-Product" key={product.id}>
                                    <div className="Cart-Name Cart-Name_shortlist">{product.name}</div>
                                    <div className="Cart-Price Cart-Price_shortlist">{product.counter > 1 ? `£${product.price}.00 x ${product.counter}` : `£${product.price}.00` }</div>
                                </li>
                            )
                        })}
                    </ul>
                    <div className="Cart-Express">
                        <div className="Cart-Delivery">Exspress Delivery</div>
                        <div className="Cart-Fee">£10.00</div>
                    </div>
                    <div className="Cart-Total">
                        <div className="Cart-Estimated">Estimated total</div>
                        <div className="Cart-TotalPrice">{`£${cart.cart.reduce((total, value) => total + (value.price * value.counter),0)+10}.00`}</div>
                    </div>
                    <NavLink to='/order' className="ModalCart-Link ModalCart-Link_mainCart" onClick={cleanCart}>CHECKOUT</NavLink>
                    <NavLink to='/' className="Cart-Link_mobile">Continue shopping</NavLink>
                </div>
            </div>
        )
    } else {
        return (
            <div className="Ordering">
                <div className="Ordering-Header">CART</div>
                <img src={ecart} alt="empty_cart" className="Ordering-Picture"/>
                <div className="Ordering-Subheader Ordering-Subheader_middle">Your cart is empty</div>
                
                <NavLink to='/' className="Ordering-Button Ordering-Button_black" >START SHOPPING</NavLink>
            </div>
        )
    }
};

const mapStateToProps = (state) => ({
    cart: state.cart,
    category: state.productCategories.Categories
})

export default connect(mapStateToProps, actions)(Cart)