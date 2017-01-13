require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';

import Card from './components/card';
import Board from './components/board';

document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(<Board title="My Board" lists={[{title: "titleA", cards:["item1", "item2"]},{title: "titleB", cards:["item3", "item4"]}]}/>, document.getElementById('app'))
);