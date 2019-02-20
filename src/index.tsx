import * as React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { sum } from './foo';
import types from './ts-examples/types';


render(
    <App message="World" />,
    document.getElementById('root'),
);

console.log(sum(1,2).toString());
