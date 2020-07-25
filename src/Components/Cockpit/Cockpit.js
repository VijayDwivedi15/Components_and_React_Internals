import React, { useEffect,useRef } from 'react';
import AuthContext from '../../context/auth-context';


import classes from './Cockpit.css';

const Cockpit = (props) => {


  //const toggleBtnRef= useRef(null);
  

//     useEffect(()=>
//     {
//         console.log('[Cockpit.js] useEffect..');
//         //HTTP Request.....
//         setTimeout(()=>
//         {
// alert('saved data to cloud');
//         },1000);
//toggleBtnRef.current.click();

// return () => 
// {
//   console.log('[Cockpit.js] clean up wor in useeffect..')
// }
//     }, [props.persons]);
    
    const assignedClasses = [];
    let btnClass = '';

    
    if(props.showPersons)
    {
        btnClass = classes.Red;

    }

    if ( props.personsLength <= 2 ) {
      assignedClasses.push( classes.red ); // classes = ['red']
    }
    if ( props.personsLength <= 1 ) {
      assignedClasses.push( classes.bold ); // classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
        <h1>{props.title}</h1>
        <p className={assignedClasses.join( ' ' )}>This is really working!</p>
        <button
          className={btnClass}
          onClick={props.clicked}
          //ref={toggleBtnRef}
          >
            Toggle Persons
            </button>
            {/* <AuthContext.Consumer>
                {context =>
               <button onClick={context.login}>Log in</button>
                 }
            </AuthContext.Consumer> */}
            <button onClick={props.login}>Log in</button>
          </div>
    );
}

// export default React.memo(Cockpit);

export default Cockpit;