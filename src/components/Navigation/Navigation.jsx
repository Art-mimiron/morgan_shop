import React from 'react'
import {NavLink} from "react-router-dom";
import {connect} from 'react-redux';

import * as actions from '../../actions/actions'

import ModalCart from '../ModalCart/ModalCart' 

function Navigation({category, categoryFilter, resetShowCount, cart, modalCartTrigger}) {
    return (
        <nav className='Navigation'>
            <NavLink to='/' >
                <img 
                src="../icons/Logo.png" 
                alt="logo" 
                className='Navigation_Logo'
                onClick={() => {categoryFilter(''); resetShowCount()}} />
            </NavLink>
            <ul className='Navigation-Links'>
                {category.IsLoading ? <div>zdarova banditi</div> : category.Categories.map((item) => {
                    return (
                        <li className='Navigation-Link' 
                        style={{order: item.menuOrder}}
                        key={item.id}>
                                <NavLink 
                                to={`/${item.alias}`} 
                                className='Navigation-Text'
                                onClick={() => {categoryFilter(item.id); resetShowCount()}}>
                                <span>{item.title}</span>
                                </NavLink>
                        </li>
                    )
                })}
            </ul>
            <button className='Navigation-Panel'>
                <img src="../icons/search.png" alt="search"/>
            </button>
            <button className='Navigation-Panel'>
                <img src="../icons/user.png" alt="user"/>
            </button>
            <button 
            className='Navigation-Panel'
            onMouseEnter={modalCartTrigger}
            onMouseLeave={modalCartTrigger}>
                <img src="../icons/cart.png" alt="cart"/>
                {cart.cart.length}
                {cart.renderModal ? <ModalCart/> : null}
            </button>
        </nav>   
    )
}

const mapStateToProps = (state) => ({
    category: state.productCategories,
    cart: state.cart
  })

export default connect(mapStateToProps, actions)(Navigation);