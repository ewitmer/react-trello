import React from 'react';
import List from './list';

export default function Board(props) {

    const lists = [];

    for (var i = 0; i < props.lists.length; i++) {
    	lists.push(<List title={props.lists[i].title} cards={props.lists[i].cards} key={i} />);
    }

    return (
        <div className="board">
        	<p>{props.title}</p>
            {lists}
        </div>
    );
}