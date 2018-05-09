import React ,{Component} from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

const style = {
  marginLeft: 20,
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

  /*handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newUser;

    fetch('http://example.com',{
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then(response => {
      response.json().then(data =>{
        console.log("Successful"+data);
      })
    })
  }*/

  render() {
    return(
      <div>
        <form>
              name: 
                <input type = "text" name = "FullName" value = {this.state.name} maxlength = "100" onChange = {this.handleFullName} />
              <br />
              age: 
                <input type = "text" name = "age" value = {this.state.age} maxlength = "100" onChange = {this.handleAge}/>
              <br />
              username: 
                <input type = "text" name = "username" value = {this.state.username} maxlength = "100" onChange = {this.handleUsername}/>
              <br />
              password: 
                <input type = "password" name = "password" value = {this.state.password} maxlength = "100" onChange = {this.handlePassword}/>
              <br />
              confirmPassword: 
                <input type = "password" name = "confirmPassword" value = {this.state.name} maxlength = "100" onChange = {this.handlelConfirmPassword} />
              <br />
              
        </form>
      </div>
    );
  }
}
export default FormContainer;