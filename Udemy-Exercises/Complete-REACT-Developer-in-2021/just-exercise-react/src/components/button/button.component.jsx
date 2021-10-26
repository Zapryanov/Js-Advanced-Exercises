import React from 'react';
import './button.styles.css';

const Button = (props) => {
    return (
        <div>
            <button className="btn">{props.textBtn}</button>
        </div>
    )
}

export default Button;