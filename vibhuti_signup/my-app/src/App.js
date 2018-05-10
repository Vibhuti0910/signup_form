import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LoginContainer from './containers/LoginContainer';
import FormContainer from './containers/FormContainer';
 
class App extends Component {
  render() {
    return (
    <MuiThemeProvider>
    <BrowserRouter>	
      <div className="App">
      	<Route path="/signup" exact component={LoginContainer} />
      	<Route path="/login" exact component={FormContainer} />
      	{this.props.children}
     </div>  
    </BrowserRouter>
	</MuiThemeProvider>

    );
  }
}

export default App;

