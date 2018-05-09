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
  			{this.state.persons.map(person => {
  				return <Person 
  					name = {person.name}
  					age = {person.age} />

  			})}
          
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