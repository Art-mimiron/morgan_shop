import React from 'react'
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

import * as actions from '../../actions/actions'

import showPassIcon from '../../img/eye.svg'
import hidePassIcon from '../../img/ic_eye.svg'
import googleIcon from '../../img/ic_google.svg'
import facebookIcon from '../../img/ic_facebook.svg'

const LoginPage = ({usersData, loginAccout, loginPassword, toglePassVisibility}) => {
    return (
        <div className="Login">
            <div className="Login-Title">LOGIN</div>
            <label htmlFor="email" className="Login-Label">
                Email
                <input 
                id='email' 
                type="text" 
                className="Login-Input" 
                placeholder='Enter your email'
                value={usersData.login.name}
                onChange={(e) => loginAccout(e)}/>
                </label>
            <label htmlFor="password" className="Login-Label">
                Password
                <input 
                id='password' 
                type={usersData.login.showPassword ? 'text' : 'password'}  
                className="Login-Input" 
                placeholder='Enter your password'
                value={usersData.login.password}
                onChange={(e) => loginPassword(e)}/>
                <button className='Login-Private'
                onClick={toglePassVisibility}>
                        <img src={usersData.login.showPassword ? showPassIcon : hidePassIcon} alt=''/>
                </button>
                <NavLink to='/password-reset' className="Login-Link Login-Link_password">Forgotten your password?</NavLink>
                </label>
            
            <button className="Login-Login">LOG IN</button>
            <div className="Login-Registration">
                <div className="Login-Question">Don't have an account?</div>
                <NavLink to="/registration" className="Login-Link">Create an account</NavLink>
            </div>
            <div className="Login-Divider">or</div>
            <div className="Login-Option">
                <button className="Login-Social">
                <img src={googleIcon} alt="" className="Login-SocialIcon"/>
                    With Google
                </button>
                <button className="Login-Social">
                <img src={facebookIcon} alt="" className="Login-SocialIcon"/>
                    With Facebook
                </button>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => ({
    usersData: state.usersData
})

export default connect(mapStateToProps, actions)(LoginPage)