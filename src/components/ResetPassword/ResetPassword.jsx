import React from 'react'
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';



import * as actions from '../../actions/actions'

const LoginPage = ({usersData, loginAccout}) => {
    return (
        <div className="Reset">
            <div className="Reset-Title">RESET YOUR PASSWORD</div>
            <div className="Reset-Description">
                Enter the email address for your Morgan account and we’ll send a single-use password reset link.
                <br/>
                <br/>
                This link will expire after 24 hours.
            </div>
            <label htmlFor="email" className="Reset-Label">
                Email
                <input 
                id='email' 
                type="text" 
                className="Reset-Input" 
                placeholder='Enter your email'
                value={usersData.login.name}
                onChange={(e) => loginAccout(e)}
                required/>
            </label>
            <button>
            <NavLink to='/password-reset-confirm' className='Reset-Button'>SEND A PASSWORD RESET LINK</NavLink>
            </button>
            <NavLink to='/login' className='Reset-Link'>Back to login</NavLink>
        </div>
    )
};

const mapStateToProps = (state) => ({
    usersData: state.usersData
})

export default connect(mapStateToProps, actions)(LoginPage)