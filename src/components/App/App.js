import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {connect} from 'react-redux';
import * as actions from '../../actions/actions'

import './App.sass';

import Navigation from '../Navigation/Navigation'
import Products from '../Products/Products'
import Categories from '../Categories/Categories'
import Cart from '../Cart/Cart'
import LoginPage from '../LoginPage/LoginPage'
import RegistrationPage from '../RegistrationPage/RegistrationPage'
import ResetPassword from '../ResetPassword/ResetPassword'
import ConfirmedOrder from '../ConfirmedOrder/ConfirmedOrder'
import ResetPasswordConfirm from '../ResetPasswordConfirm/ResetPasswordConfirm'


class App extends Component {

  componentDidMount = () => {
    this.props.getCategories()
    this.props.getProducts()
    window.addEventListener('scroll', this.scrollHandler)
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.scrollHandler)
  }

  scrollHandler = () => {
    if (window.scrollY >= 300) {
      this.props.toggleScrollArrow('top')
    } else {
      this.props.toggleScrollArrow('bottom')
    }
  }

  render() {
    return (
      <div>
          <Router>
              <Navigation />
              <Switch>
              {this.props.category.Categories.map((item) => {
                    return (
                      <Route path={`/${item.alias}`} key={item.id}>
                        <Products/>
                      </Route>
                    )
                })}
                <Route path="/cart">
                  <Cart/>
                </Route>
                <Route path="/order">
                  <ConfirmedOrder/>
                </Route>
                <Route path="/login">
                  <LoginPage/>
                </Route>
                <Route path="/registration">
                  <RegistrationPage/>
                </Route>
                <Route path="/password-reset">
                  <ResetPassword/>
                </Route>
                <Route path="/password-reset-confirm">
                  <ResetPasswordConfirm/>
                </Route>
                <Route path="/">
                  <Categories/>
                  <Products/>
                </Route>
              </Switch>
          </Router>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  category: state.productCategories,
  products: state.productItems
})

export default connect(mapStateToProps, actions)(App);