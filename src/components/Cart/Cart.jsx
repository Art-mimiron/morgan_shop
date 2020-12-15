import React from 'react'
import {connect} from 'react-redux'

import * as actions from '../../actions/actions'

const Cart = () => {
    return (
        <div>sho tam bratok</div>
    )
};

const mapStateToProps = (state) => ({
    cart: state.cart
})

export default connect(mapStateToProps, actions)(Cart)