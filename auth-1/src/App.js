import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ForgotPasswordContainer from './ForgotPasswordContainer';
import headerbg from './header-bg.jpeg';
import './ForgotPasswordContainer.css';
import { MuiThemeProvider} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';


class App extends Component {
  render() {
    return (
    <MuiThemeProvider>	
    	<AppBar title ="Login" />
      <div className="App">
        <ForgotPasswordContainer />
      </div>
     </MuiThemeProvider>
    );
  }
}

export default App;
