import React from 'react';
import ReactDOM from 'react-dom';

export default function Card() {
	const title = 'To Do';
	const desc = 'Here is where you list what to do';

	return (
		<div className="card">
			<div className="title">{title}</div>
			<div className="desc">{desc}</div>
		</div>	
	);
		
}