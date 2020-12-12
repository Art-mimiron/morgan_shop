import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {connect} from 'react-redux';
import * as actions from '../../actions/actions'

import './App.sass';

import Navigation from '../Navigation/Navigation'
import Products from '../Products/Products'
import Categories from '../Categories/Categories'



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
                      </Route>
                    )
                })}
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
  category: state.productCategories
})

export default connect(mapStateToProps, actions)(App);