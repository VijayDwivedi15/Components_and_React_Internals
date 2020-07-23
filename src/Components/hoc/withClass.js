import React from 'react';

//----First Way of using HOC

// const withClass = props => (
//     <div className={props.classes}>{props.children}</div>
// );


//-------Second Way of Using Hoc

const withClass = (WrappedComponent, className) => 
{
    return props => (
        <div className={className}>
            <WrappedComponent {...props}></WrappedComponent>
        </div>
    );
};

export default withClass;