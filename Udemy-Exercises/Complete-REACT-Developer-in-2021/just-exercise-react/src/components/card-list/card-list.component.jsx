import React from 'react';
import Card from '../card/card.component';
import './card-list.styles.css';

const CardList = (props) => {
    return (
        <div className="wrapper-card-list">
            {props.monsters.map(x => (<Card key={x.id} title={x.name} textBtn={x.id}/>))}
        </div>
    )
}

export default CardList;