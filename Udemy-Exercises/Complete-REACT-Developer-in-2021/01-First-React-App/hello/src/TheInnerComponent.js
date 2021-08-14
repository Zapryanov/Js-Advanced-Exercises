import React from 'react';

const TheInnerComponent = (props) => {
    return (
        <div>This is The Most Inner Component...!!! - Made from - {props.name} ({props.age} years old from {props.address})</div>
    )
}

export default TheInnerComponent;