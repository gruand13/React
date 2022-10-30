import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const text = "hello world";

const elem = (
  <div>
    <h2 >Text : {text}</h2>;
    <input type='text'/>
    <button tabIndex='0'>click</button>
  </div>
);

// const elem = React.createElement('h2', {className: 'greeting'}, 'Hello world');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  elem
);


