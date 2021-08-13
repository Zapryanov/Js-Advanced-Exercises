import React from 'react';
import TheInnerComponent from './TheInnerComponent';

const myName = "Ivan";
const age = 41;
const address = "Plovdiv";

const TestComponent = (props) => {
    console.log(props);
    
    return (
        <div>
            Hello from TestComponent - {props.testValue}...!
            <TheInnerComponent name={myName} age={age} address={address}/>
        </div>
    )
}

export default TestComponent;