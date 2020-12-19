import React from 'react'
import {connect} from 'react-redux'

import passReset from '../../img/pw_reset.png'

const ResetPasswordConfirm = ({email}) => {
    return (
        <div className="PasReset">
            <div className="PasReset-Title">YOUR LINK HAS BEEN SENT</div>
            <img src={passReset} alt="" className="PasReset-Picture"/>
            <div className="PasReset-Text">We have sent a password reset email to your adress:</div>
            <div className="PasReset-Mail">{email}</div>
            <div className="PasReset-Hint">If you can’t find the email, please check your junk folder.</div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    email: state.usersData.login.name
})

export default connect(mapStateToProps, null)(ResetPasswordConfirm)