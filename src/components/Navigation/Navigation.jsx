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

const Navigation = ({category, categoryFilter, resetShowCount, cart, modalCartTrigger, searchBar, toggleSearchBar, generateSearchQuery}) => {
    return (
        <nav className='Navigation' id='Navigation'>
            <div className="Navigation-URLs">
                <NavLink to='/' className='Navigation-Logo'>
                    <img 
                    src={logo}
                    alt="logo"
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
                <div className="Navigation-Searchbar">
                        <label htmlFor="search" data-search_line className="Navigation-Searchbar_line" style={searchBar.showSearchBar? {transform: 'translateX(0)'} : {transform: 'translateX(100%)'}}/>
                        <input data-search_bar type="search" name="search" className='Navigation-Searchbar_input' 
                        disabled={searchBar.showSearchBar? false : true}
                        value={searchBar.query}
                        onChange={(e) => generateSearchQuery(e)}
                        style={searchBar.showSearchBar? {backgroundColor: '#FAFAFA'} : {backgroundColor: 'inherit'}}/>
                </div>
                    {searchBar.query.length > 0 ? <SearchItems/> : null}
                <button className='Navigation-Panel' onClick={toggleSearchBar}>
                    <img src={search} alt="search"/>
                </button>
                <NavLink to='/login' className='Navigation-Panel'>
                    <img src={user} alt="user"/>
                </NavLink>
                <button 
                className='Navigation-Panel'
                onClick={modalCartTrigger}>
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
    cart: state.cart,
    searchBar: state.searchBar
  })

export default connect(mapStateToProps, actions)(Navigation);