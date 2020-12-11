import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import {connect} from 'react-redux';
import * as actions from '../../actions/actions'

import './App.sass';

import Navigation from '../Navigation/Navigation'



class App extends Component {

  componentDidMount = () => {
    this.props.getCategories()
  }

  render() {
      return (
      <>
          <Router>
              
              <Navigation />
              
              <Switch>
                <Route path="/About">
                  hello
                </Route>
                <Route path="/User_list">
                  qwe
                </Route>
                <Route path="/New_user">
                  zdarova
                </Route>
                <Route path="/Abouts">
                  zdarovaasd
                </Route>
                <Route path="/">
                  <Redirect to="/New_user" />
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