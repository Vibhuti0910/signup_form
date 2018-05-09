import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import PasswordField from 'material-ui-password-field'

const style = {
  margin: 12,
};

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        name: '',
        age: '',
        username : '',
        password : '',
        confirmPassword: ''
      },
    }
    
      this.handleAge = this.handleAge.bind(this);
      this.handleFullName = this.handleFullName.bind(this);
      this.handleConfirmPassword = this.handleConfirmPassword.bind(this);
      this.handlePassword = this.handlePassword.bind(this);
      this.handleUsername = this.handleUsername.bind(this);
  }
  handleFullName(e) {
        let value = e.target.value;
      this.setState( prevState => ({ newUser : 
          {...prevState.newUser, name: value} 
        }), () => console.log(this.state.newUser))
  }

  handleAge(e) {
    let value = e.target.value;
    this.setState( prevState => ({newUser:
      {...prevState.newUser,age:value}
    }), () => console.log(this.state.newUser))
  }

  handleUsername(e) {
    let value = e.target.value;
    this.setState( prevState => ({newUser:
      {...prevState.newUser,username:value}
    }), () => console.log(this.state.newUser))
  }

  handlePassword(e) {
    let value = e.target.value;
    this.setState( prevState => ({newUser:
      {...prevState.newUser,password: value}
    }), () => console.log(this.state.newUser))
  }

  handleConfirmPassword(e) {
    let value = e.target.value;
    let prevValue = this.state.password;
    if (value === prevValue) {
        this.setState( prevState => ({newUser:
      {...prevState.newUser,confirmPassword: value}
    }), () => console.log(this.state.newUser))
    } else {
      alert("password does not match");
    }
    
  }

  render() {
    return(
      <div>
        <form>
            <TextField
            defaultValue="name"
            hintText="enter name"
            errorText="This field is required"
            floatingLabelText="enter name"
            onChange = {this.handleFullName}
            /><br />

            <TextField
            defaultValue="age"
            hintText="enter age"
            errorText="This field is required"
            floatingLabelText="enter age"
            onChange = {this.handleAge}
            /><br />

            <TextField
            defaultValue="username"
            hintText="enter username"
            errorText="This field is required"
            floatingLabelText="enter username"
            onChange = {this.handleUsername}
            /><br />

            <TextField
            defaultValue="password"
            hintText="enter password"
            errorText="This field is required"
            floatingLabelText="enter password"
            type="password"
            onChange = {this.handlePassword}
            /><br />
        </form>
      </div>

      );
  }
}
export default FormContainer;