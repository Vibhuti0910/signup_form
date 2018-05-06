import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

	state = {
		persons: [
			{
        name:'Max',
        age:28
      },
			{
        name:'Manu',
        age:29
      },
			{
        name:'Stephanie',
        age:26
      }
		],
		showPersons:false
	}

	switchNameHandler = (newName) => {
		// console.log('Was Clicked!!!');
		this.setState({
			persons: [
  			{
          name:newName,
          age:28
        },
  			{
          name:'Manu',
          age:29
        },
  			{
          name:'Stephanie',
          age:27
        }
  		]
		})
	}

	nameChangedHandler = (event) => {
		this.setState({
			persons: [
			 {
        name:'Max',
        age:28
       },
			 {
        name: event.target.value,
        age:29
       },
			 {
        name:'Stephanie'
         age:2
         6}
		  ]
		})
	}

	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({showPersons: !doesShow})
	}

  
  render() {
  	const style = {
  		backgroundColor: 'white',
  		font:'inherit',
  		border:'5px solid blue',
  		padding:'8 px',
  		cursor: 'pointer'
  	}

  	let persons = null;

  	if(this.state.showPersons) {
  		persons = (
  			<div>  
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />

          <Person name={this.state.persons[1].name} 
          		age={this.state.persons[1].age} 
          		click = {this.switchNameHandler.bind(this,'Max!!!!!')}
          		changed = {this.nameChangedHandler}>
              My Hobbies:racing
          </Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
        </div> 
  		);
  	}

    return (
      <div className="App">
        <h1>Hi, I'm a React App!!!</h1>
        <p>This is really Working!!!</p>
        <button
        	style = {style} 
          onClick = {this.togglePersonsHandler}>
          toggle persons
        </button>
      
      	{persons}

      </div>
    );
  }
}

export default App;