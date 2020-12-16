import React from 'react'
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

import * as actions from '../../actions/actions'

const LoginPage = () => {
    return (
        <div className="Login">
            <div className="Login-Title">LOGIN</div>
            <label htmlFor="email" className="Login-Label">
                Email
                <input id='email' type="text" className="Login-Input" placeholder='Enter your email'/>
                </label>
            <label htmlFor="password" className="Login-Label">
                Password
                <input id='password' type="text" className="Login-Input" placeholder='Enter your password'/>
                <NavLink to='/password-reset' className="Login-Link Login-Link_password">Forgotten your password?</NavLink>
                </label>
            
            <button className="Login-Login">LOG IN</button>
            <div className="Login-Registration">
                <div className="Login-Question">Don't have an account?</div>
                <NavLink to="/registration" className="Login-Link">Create an account</NavLink>
            </div>
            <div className="Login-Divider">or</div>
            <div className="Login-Option">
                <button className="Login-Social">With Google</button>
                <button className="Login-Social">With Facebook</button>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => ({
    usersData: state.usersData
})

export default connect(mapStateToProps, actions)(LoginPage)