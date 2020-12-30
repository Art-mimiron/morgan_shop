import React from 'react'
import {connect} from 'react-redux'
import {NavLink} from "react-router-dom";

import * as actions from '../../actions/actions'

import ecart from '../../img/ecart.png'

const ModalCart = ({cart}) => {
    if (cart.cart.length > 0) {
        return (
            <div className='ModalCart'>
                <div className="ModalCart-Wrapper">
                    <ul className="ModalCart-List">
                        {cart.cart.map((product) => {
                            return (
                                <li className="ModalCart-Item" key={product.id}>
                                    <img src={'https://morgan-shop.herokuapp.com'+product.image} alt={product.alias} className="ModalCart-Picture"/>
                                    <div className="ModalCart-Description">
                                        <div className="ModalCart-Name">{product.name}</div>
                                        <div className="ModalCart-Price"><span className='ModalCart-Count'>{product.counter} x</span> £{product.price}.00</div>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                    <NavLink to='/cart' className="ModalCart-Link">GO TO CHECKOUT</NavLink>
                </div>
            </div>
        )
    } else {
        return (
            <div className='ModalCart'>
                <div className="ModalCart-Wrapper">
                    <img src={ecart} alt="empty_cart" className="Ordering-Picture"/>
                    <div className="Ordering-Subheader Ordering-Subheader_middle">Your cart is empty</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    cart: state.cart
})

export default connect(mapStateToProps, actions)(ModalCart);