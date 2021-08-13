import React from 'react';
import TheInnerComponent from './TheInnerComponent';

const myName = "Ivan";

const TestComponent = (props) => {
    
    return (
        <div>
            Hello from TestComponent - {props.testValue}...!
            <TheInnerComponent name={myName}/>
        </div>
    )
}

export default TestComponent;