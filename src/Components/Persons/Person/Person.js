import React, {Component} from 'react';
import classes from './Person.css';
import Auxiliary from '../../hoc/auxiliary';
import withClass from '../../hoc/withClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

class Person extends Component {

    //----2nd way of using Ref   --not working in my case version problem

    // constructor(props)
    // {
    //      super(props);
    //      this.inputElRef= React.createRef();
    // }





 //------First way of using Ref   
componentDidMount()
{
    this.inputElememt.focus();
    //this.inputElRef.current.focus();  not working in my case version problem
}

render()
{
    console.log('[Person.js] rendering....');
    return (
        <Auxiliary>
            {/* <AuthContext.Consumer>
                {context =>
               context.authenticated ? <p>Authenticated</p> : <p>Please Login</p>
                 }
            </AuthContext.Consumer> */}
           
{this.props.isAuth  ? <p>Authenticated</p> : <p>Please Login</p>}


         {/* <div className={classes.Person}> */}
            <p  onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
            <p >{this.props.children}</p>
            <input  
            type="text" 
            ref={(inputEl)=>{this.inputElememt=inputEl}}
               //ref={this.inputElRef}  ---not working in my case version problem

            onChange={this.props.changed}
             value={this.props.name} />
         {/* </div> */}
        </Auxiliary>
    );
}
}


Person.PropTypes = {
    click : PropTypes.func,
    name: PropTypes.string,
    age:PropTypes.number,
    changed:PropTypes.func
};

export default withClass(Person,classes.Person);