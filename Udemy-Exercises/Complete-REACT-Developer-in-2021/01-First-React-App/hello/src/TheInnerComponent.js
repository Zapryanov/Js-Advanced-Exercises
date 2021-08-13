import React from 'react';

const TheInnerComponent = (props) => {
    return (
        <div>This is The Most Inner Component...!!! - Made from - {props.name}</div>
    )
}

export default TheInnerComponent;