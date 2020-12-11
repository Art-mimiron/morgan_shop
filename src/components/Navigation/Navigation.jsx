import React from 'react'
import {NavLink} from "react-router-dom";

export default function Navigation() {
    return (
        <nav className='Navigation'>
            <NavLink to='/New_user' >
                <img src="../icons/Logo.png" alt="logo" className='Navigation_Logo'/>
            </NavLink>
            <ul className='Navigation-Links'>
                <li className='Navigation-Link'>
                    <NavLink to="/New_user" className='Navigation-Text'>
                    <img className='Navigation-Img' src="./add_user.png" alt=""/>
                    <span>Interior ceiling</span>
                    </NavLink>
                </li>
                <li className='Navigation-Link' >
                    <NavLink to="/User_list" className='Navigation-Text'>
                    <img className='Navigation-Img' src="./user_list.png" alt=""/>Floor lamps
                    </NavLink>
                </li>
                <li className='Navigation-Link'>
                    <NavLink to="/About" className='Navigation-Text'>
                    <img className='Navigation-Img' src="./about.png" alt=""/>
                    <span>Exterior ceiling</span>
                    </NavLink>
                </li>
                <li className='Navigation-Link'>
                    <NavLink to="/Abouts" className='Navigation-Text'>
                    <img className='Navigation-Img' src="./about.png" alt=""/>
                    <span>Table lamps</span>
                    </NavLink>
                </li>
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