import React from 'react'
import {NavLink} from "react-router-dom";
import {connect} from 'react-redux';

import * as actions from '../../actions/actions'

import ModalCart from '../ModalCart/ModalCart' 
import SearchItems from '../SearchItems/SearchItems'

import logo from '../../img/Logo.png'
import search from '../../img/search.png'
import user from '../../img/user.png'
import cartIcon from '../../img/cart.png'

const Navigation = ({category, categoryFilter, resetShowCount, cart, modalCartTrigger, searchBar, toggleSearchBar, generateSearchQuery, navMenuToggle}) => {
    return (
        <nav className='Navigation' id='Navigation'>
            <div className="Navigation-Container">
                <button className={category.NavMenuShow ? "Navigation-Hamburger opened": "Navigation-Hamburger"} aria-label="Main Menu" onClick={navMenuToggle}>
                    <svg width="35" height="35" viewBox="0 0 100 100">
                        <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                        <path className="line line2" d="M 20,50 H 80" />
                        <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                    </svg>
                </button>
                <div className="Navigation-URLs">
                    <NavLink to='/' className='Navigation-Logo'>
                        <img 
                        src={logo}
                        alt="logo"
                        onClick={() => {categoryFilter(''); resetShowCount()}} />
                    </NavLink>
                    <ul className='Navigation-Links' style={category.NavMenuShow ? {transform: 'translateX(0)'} : null}>
                        {category.IsLoading ? <div>zdarova banditi</div> : category.Categories.map((item) => {
                            return (
                                <li className='Navigation-Link' 
                                style={{order: item.menuOrder}}
                                key={item.id}>
                                        <NavLink 
                                        to={`/${item.alias}`} 
                                        className='Navigation-Text'
                                        onClick={() => {categoryFilter(item.id); resetShowCount(); if(category.NavMenuShow){navMenuToggle()}}}>
                                        <span>{item.title}</span>
                                        </NavLink>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="Navigation-Buttons">
                    <div className="Navigation-Searchbar" style={searchBar.showSearchBar? {pointerEvents: 'initial'} : {pointerEvents: 'none'}}>
                            <label htmlFor="search" data-search_line className="Navigation-Searchbar_line" style={searchBar.showSearchBar? {transform: 'translateX(0)'} : {transform: 'translateX(100%)'}}/>
                            <input data-search_bar type="search" name="search" className='Navigation-Searchbar_input' 
                            disabled={searchBar.showSearchBar? false : true}
                            value={searchBar.query}
                            onChange={(e) => generateSearchQuery(e)}
                            style={searchBar.showSearchBar? {backgroundColor: '#FAFAFA'} : {backgroundColor: 'inherit'}}/>
                    </div>
                        {searchBar.query.length > 0 ? <SearchItems/> : null}
                    <button className='Navigation-Panel Navigation-Panel_search' onClick={toggleSearchBar} style={category.NavMenuShow ? {display: 'block'} : null}>
                        <img src={search} alt="search"/>
                    </button>
                    <NavLink to='/login' className='Navigation-Panel' style={category.NavMenuShow ? {display: 'none'} : null}>
                        <img src={user} alt="user"/>
                    </NavLink>
                    <button 
                    className='Navigation-Panel'
                    onClick={modalCartTrigger}
                    style={category.NavMenuShow ? {display: 'none'} : null}>
                        <img src={cartIcon} alt=''/>
                        {cart.cart.length}
                        {cart.renderModal ? <ModalCart/> : null}
                    </button>
                </div>
            </div>
        </nav>   
    )
}

const mapStateToProps = (state) => ({
    category: state.productCategories,
    cart: state.cart,
    searchBar: state.searchBar,
  })

export default connect(mapStateToProps, actions)(Navigation);