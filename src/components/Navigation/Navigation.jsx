import React from 'react'
import {NavLink} from "react-router-dom";
import {connect} from 'react-redux';

import * as actions from '../../actions/actions'

import ModalCart from '../ModalCart/ModalCart' 

import logo from '../../img/Logo.png'
import search from '../../img/search.png'
import user from '../../img/user.png'
import cartIcon from '../../img/cart.png'

const Navigation = ({category, categoryFilter, resetShowCount, cart, modalCartTrigger}) => {
    return (
        <nav className='Navigation'>
            <div className="Navigation-URLs">
                <NavLink to='/' >
                    <img 
                    src={logo}
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
            </div>
            <div className="Navigation-Buttons">
                <button className='Navigation-Panel'>
                    <img src={search} alt="search"/>
                </button>
                <NavLink to='/login' className='Navigation-Panel'>
                    <img src={user} alt="user"/>
                </NavLink>
                <button 
                className='Navigation-Panel'
                onMouseEnter={cart.cart.length > 0 ? modalCartTrigger : null}
                onMouseLeave={cart.cart.length > 0 ? modalCartTrigger : null}>
                    <img src={cartIcon} alt=''/>
                    {cart.cart.length}
                    {cart.renderModal ? <ModalCart/> : null}
                </button>
            </div>
        </nav>   
    )
}

const mapStateToProps = (state) => ({
    category: state.productCategories,
    cart: state.cart
  })

export default connect(mapStateToProps, actions)(Navigation);