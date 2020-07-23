import React, { Component } from 'react';
import classes from './App.css';
import Person from '../Components/Persons/Person/Person';
import Persons from '../Components/Persons/Persons';

import Cockpit from '../Components/Cockpit/Cockpit';
import withClass from '../Components/hoc/withClass';
import auxiliary from '../Components/hoc/auxiliary';



class App extends Component {


  constructor(props)
  {
    super(props);
    console.log('[App.js] Constructor');
  }


  state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit :true,
    changeCounter :0,
    authenticated:false
  };


  static getDerivedStateFromProps(props,state)
  {
    console.log('[App.js] getDerivedStateFromprops', props);
    return state;
  }


  // componentWillMount()
  // {
  //   console.log('[App.js] ComponentWillMount....');
  // }

  componentDidMount()
  {
    console.log('[App.js] ComponentDidMount......');
  }

  shouldComponentUpdate(nextprops, nextState)
  {
    console.log('[App.js] shouldComponentUpdate.');
    return true;

  }

  componentDidUpdate()
  {
    console.log('[App.js] componentDidUpdate.');
    

  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    } );

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( (prevState, props) =>
    {
      return { 
        persons: persons , changeCounter: this.state.changeCounter + 1
      } 
     
    }  );
  }

  deletePersonHandler = ( personIndex ) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice( personIndex, 1 );
    this.setState( { persons: persons } );
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }


  loginHandler = () => {
this.setState({authenticated:true});
  }

  render () {
    console.log('[App.js] render');
    let persons = null;
   
    if ( this.state.showPersons ) {
      persons = <Persons
persons= {this.state.persons}
clicked={this.deletePersonHandler}
changed={this.nameChangedHandler}
isAuthenticated= {this.state.authenticated}
/>;

    }

    
    return (
      <auxiliary>
        

<button onClick={()=>{this.setState({showCockpit:false});
}}>Remove Cockpit</button>

{this.state.showCockpit ? 


        <Cockpit
        title={this.props.appTitle}
        showPersons= {this.state.showPersons}
        personsLength= {this.state.persons.length}
        clicked={this.togglePersonsHandler}
        login={this.loginHandler}
        />: null }
        {persons}
      </auxiliary>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

// export default App;

//----------Way with using HOC 

export default withClass(App,classes.App);