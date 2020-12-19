import React from 'react'
import {NavLink} from 'react-router-dom'

import order from '../../img/order.png'

import formatDate from '../../utils/dateFormating'

const ConfirmedOrder = () => {
    return (
        <div className="Ordering">
            <div className="Ordering-Header">THANK YOU!</div>
            <img src={order} alt="order" className="Ordering-Picture"/>
            <div className="Ordering-Subheader">Your ordering is completely successful</div>
            <div className="Ordering-Description">We'll let you know when it ships and it headed your way.</div>
            <div className="Ordering-Info">
                <div className="Ordering-Number">Order:  <span className='Ordering-Detail'> {Date.now()}</span></div>
                <div className="Ordering-Date">Date order:  <span className='Ordering-Detail'> {formatDate(new Date())}</span></div>
            </div>
            <NavLink to='/' className="Ordering-Button" >CONTINUE SHOPPING</NavLink>
        </div>
    )
}

export default ConfirmedOrder;