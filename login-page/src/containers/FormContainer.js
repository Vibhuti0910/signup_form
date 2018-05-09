import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import PasswordField from 'material-ui-password-field'



class FormContainer extends Component {

	constructor(props) {
		super(props);

		this.state = {
			loginUser: {
				username: '',
				password: ''
			}
		}
		this.handleUsername = this.handleUsername.bind(this);
		this.handlePassword = this.handlePassword.bind(this);
		this.handleFormLogin = this.handleFormLogin.bind(this);
		this.handleForgotPassword = this.handleForgotPassword.bind(this);
	}

	handleUsername(e) {
		let value = e.target.value;
		this.setState( prevState => ( { loginUser:
			{...prevState.loginUser,username:value}

		}
			),() => console.log(this.state.loginUser)
			)
		}

	handlePassword(e) {
		let value = e.target.value;
		this.setState( prevState => ( { loginUser:
			{...prevState.loginUser,password:value}

		}
			),() => console.log(this.state.loginUser)
			)
		}

		handleFormLogin() { }
		handleForgotPassword() { }

	render() {
		return (
			<div>
				<MuiThemeProvider>
				<AppBar title ="Login" />

				<form className="container-fluid" onSubmit={this.handleFormLogin}>

					<TextField
						hintText="Enter your Username"
						floatingLabelText="Username"
						onChange={this.handleUsername}
						 />
					<br />
					<PasswordField
						hintText="Enter your Password"
						floatingLabelText="Password"
						onChange={this.handlePassword}
						 />
					<br />
					<RaisedButton 
						label ='Login'
						primary={true}
          				style={buttonStyle}
          				onClick={this.handleFormLogin}/>
          			<RaisedButton
          				label ='Forgot Password' 
          				primary = {true}
          				style={buttonStyle}
          				onClick={this.handleForgotPassword}/>

				</form>
				</MuiThemeProvider>
			</div>

			);
		}
}

const buttonStyle = {
	margin : 15,
	backgroundColor: 'white',
    font: 'inherit',
    padding: '0px',
    cursor: 'pointer'
}

export default FormContainer;