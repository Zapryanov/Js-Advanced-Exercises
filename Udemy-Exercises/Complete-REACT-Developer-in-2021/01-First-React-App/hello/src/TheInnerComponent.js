import React from 'react';
import styles from './TheInnerComponent.module.css';
const TheInnerComponent = (props) => {
    console.log(props)
    return (
        <div className={styles.color}>This is The Most Inner Component...!!! - Made from - {props.name} ({props.age} years old from {props.address})</div>
    )
}

export default TheInnerComponent;