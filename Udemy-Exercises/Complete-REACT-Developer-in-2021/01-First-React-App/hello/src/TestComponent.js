import React from 'react';
import TheInnerComponent from './TheInnerComponent';
import styles from './TestComponent.module.css';

const myName = "Ivan";
const age = 41;
const address = "Plovdiv";

const TestComponent = (props) => {    
    return (
        <div>
            <p className={styles.color}>Hello from TestComponent - {props.testValue}...!</p>
            <TheInnerComponent name={myName} age={age} address={address} {...props}/>
        </div>
    )
}

export default TestComponent;