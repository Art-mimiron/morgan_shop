import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux';

import * as actions from '../../actions/actions'

const RegistrationPage = () => {
    return (
        <div className="Registration">
            <div className="Registration-Title">CREATE AN ACCOUNT</div>
            <label htmlFor="name" className="Registration-Label">
                Full name
                <input id='name' type="text" className="Registration-Input" placeholder='Enter your First and Last name'/>
            </label>
            <label htmlFor="email" className="Registration-Label">
                Email
                <input id='email' type="text" className="Registration-Input" placeholder='Enter your email'/>
            </label>
            <label htmlFor="password" className="Registration-Label">
                Password <span className='Registration-Hint'>(min 6 char)</span>
                <input id='password' type="text" className="Registration-Input" placeholder='Enter your password'/>
            </label>
            <div className="Registration-Terms">
            By creating an account you agree to the website 
            <NavLink to='/' className='Registration-Terms'> terms and conditions </NavLink> 
            and our 
            <NavLink to='/' className='Registration-Terms'> privacy notice. </NavLink>
            </div>
            <button className="Registration-Login">CREATE AN ACCOUNT</button>
            <div className="Registration-Registration">
                <div className="Registration-Question">Have an account?</div>
                <NavLink to="/login" className="Registration-Link">Login</NavLink>
            </div>
            <div className="Registration-Divider">or</div>
            <div className="Registration-Option">
                <button className="Registration-Social">With Google</button>
                <button className="Registration-Social">With Facebook</button>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => ({
    usersData: state.usersData
})

export default connect(mapStateToProps, actions)(RegistrationPage)