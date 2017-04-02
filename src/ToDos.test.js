import React from 'react';
import ReactDOM from 'react-dom';
import App from './ToDos';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ToDos />, div);
});
