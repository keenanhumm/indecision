import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


console.log('Running app.js');  

ReactDOM.render(<IndecisionApp options={['Thing1', 'thing2']} />, document.getElementById('app'));