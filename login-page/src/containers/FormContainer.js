import React, { Component } from 'react';
import { MuiThemeProvider} from 'material-ui/styles';
import axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import PasswordField from 'material-ui-password-field'
import { Route , Link } from 'react-router-dom';
import LoginContainer from './LoginContainer';


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

		handleFormLogin() {
			axios.get('https://miteventbooking.herokuapp.com/login',{
				params:{
					username:this.state.loginUser.username,
					password:this.state.loginUser.password
				}
			})
			.then(response => {
				console.log(response);
				if(response.data.code === 'success') {
					var user = response.data.user;
					alert("Welcome " + user.displayName);
				}
				else if(response.data.code === 'failed')
					alert("Unsuccessful login attempt");
			})
			.catch(error => {
				console.log("request couldn't be made",error);
			})
		}
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
          			

          			<Link to="/signup"><RaisedButton
          				label ='SignUP' 
          				primary = {true}
          				style={buttonStyle}
          				onClick={this.handleForgotPassword}/></Link>



          			
					


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