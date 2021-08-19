import React from 'react';
import TheInnerComponent from './TheInnerComponent';

const myName = "Ivan";
const age = 41;
const address = "Plovdiv";

const TestComponent = (props) => {    
    return (
        <div>
            Hello from TestComponent - {props.testValue}...!
            <TheInnerComponent name={myName} age={age} address={address} {...props}/>
        </div>
    )
}

export default TestComponent;