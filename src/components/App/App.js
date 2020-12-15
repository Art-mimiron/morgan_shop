import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {connect} from 'react-redux';
import * as actions from '../../actions/actions'

import './App.sass';

import Navigation from '../Navigation/Navigation'
import Products from '../Products/Products'
import Categories from '../Categories/Categories'
import Cart from '../Cart/Cart'



class App extends Component {

  componentDidMount = () => {
    this.props.getCategories()
    this.props.getProducts()
  }

  render() {
    return (
      <>
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
                <Route path="/">
                  <Categories/>
                  <Products/>
                </Route>
              </Switch>
          </Router>
        </>
    );
  }
}

const mapStateToProps = (state) => ({
  category: state.productCategories,
  products: state.productItems
})

export default connect(mapStateToProps, actions)(App);