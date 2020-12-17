import React from 'react'
import {NavLink} from "react-router-dom";
import {connect} from 'react-redux';

import * as actions from '../../actions/actions'

import ModalCart from '../ModalCart/ModalCart' 

const Navigation = ({category, categoryFilter, resetShowCount, cart, modalCartTrigger}) => {
    return (
        <nav className='Navigation'>
            <NavLink to='/' >
                <img 
                src='./img/Logo.png'
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
                <img src="./img/search.png" alt="search"/>
            </button>
            <NavLink to='/login' className='Navigation-Panel'>
                <img src="./img/user.png" alt="user"/>
            </NavLink>
            <button 
            className='Navigation-Panel'
            onMouseEnter={modalCartTrigger}
            onMouseLeave={modalCartTrigger}>
                <img src="./img/cart.png" alt="cart"/>
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