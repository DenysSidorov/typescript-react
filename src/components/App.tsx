import * as React from 'react';
interface AppProps {
    message: string,
    types: object
};
export default function({ message }: AppProps ) {
    return <h1>Hello {message}</h1>
};