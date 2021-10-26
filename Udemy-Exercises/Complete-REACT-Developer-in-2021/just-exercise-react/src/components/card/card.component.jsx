import React from 'react';
import Button from '../button/button.component';
import './card.styles.css';


const Card = (props) => {
    return (
        <div className="wrapper-card">
            <h3>{props.title}</h3>
            <Button textBtn={props.textBtn} />
        </div>
    )
}

export default Card;