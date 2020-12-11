import React from 'react'
import {NavLink} from "react-router-dom";
import {connect} from 'react-redux';

function Navigation({category}) {
    return (
        <nav className='Navigation'>
            <NavLink to='/New_user' >
                <img src="../icons/Logo.png" alt="logo" className='Navigation_Logo'/>
            </NavLink>
            <ul className='Navigation-Links'>
                {/* category.IsLoading ? */ category.Categories.map((item) => {
                    return (
                            <li className='Navigation-Link'>
                                    <NavLink to={`/${item.alias}`} className='Navigation-Text'>
                                    <span>{item.title}</span>
                                </NavLink>
                            </li>
                    )
                }) /* : <div>zdarova banditi</div> */}
            </ul>
            <button className='Navigation-Panel'>
                <img src="../icons/search.png" alt="search"/>
            </button>
            <button className='Navigation-Panel'>
                <img src="../icons/user.png" alt="user"/>
            </button>
            <button className='Navigation-Panel'>
                <img src="../icons/cart.png" alt="cart"/>
            </button>
        </nav>   
    )
}

const mapStateToProps = (state) => ({
    category: state.productCategories
  })

export default connect(mapStateToProps, null)(Navigation);