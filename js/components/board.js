import React from 'react';
import List from './list';
import ListContainer from './list-container';


export default function Board(props) {

    const titles = ['List 1', 'List 2', 'List 3'];
    const lists = [];

    for (var i = 0; i < titles.length; i++) {
    	lists.push(<ListContainer title={titles[i]} key={i} />);
    }

    return (
        <div className="board">
        	<h1>{props.title}</h1>
            {lists}
        </div>
    );
}