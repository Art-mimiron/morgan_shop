import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import {connect} from 'react-redux';

import './App.sass';

import Navigation from '../Navigation/Navigation'


function App() {
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

export default App;

let x = '5', y = '10', result = x + y;
console.log(result);

let a = 100;
if (a > 50) {
  let a = 20;
}
console.log(a)

class Cat {
  constructor(name) {
    this.name = name;
  }

  say() {
    console.log(this.name + 'asdasd');
  }
}

class Tiger extends Cat {
  say(){
    this.name = 'daun'
    console (this.name)
  }
}

function changeWordsOrder(str) {
  let array = str.split(' ')
  console.log(array)
  console.log(array.sort())
}

changeWordsOrder('Sho tam bratok a?')