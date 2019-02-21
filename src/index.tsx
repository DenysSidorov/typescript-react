import * as React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { sum } from './foo';
import types from './ts-examples/types';
import f from './ts-examples/functions';

render(
    <App message="World" types={types}/>,
    document.getElementById('root'),
);

console.log(sum(1,2).toString());
