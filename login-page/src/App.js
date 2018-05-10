import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FormContainer from './containers/FormContainer';
import { BrowserRouter, Route } from 'react-router-dom';
import LoginContainer from './containers/LoginContainer';


class App extends Component {
  render() {
    return (
    <BrowserRouter>	
      <div className="App">
      	<Route path="/signup" exact component={LoginContainer} />
      	<FormContainer />
      </div>
     </BrowserRouter>
    );
  }
}

export default App;