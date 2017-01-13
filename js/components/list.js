import React from 'react';
import Card from './card';

export default function List(props) {

    const cards = [];

    for (var i = 0; i < props.cards.length; i++) {
        cards.push(<Card text={props.cards[i]} key={i} />);
    }

    return (
        <div className="board">
            <div>{props.title}</div>
            {cards}
        </div>
    );
}