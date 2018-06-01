import React from 'react';

import './../sass/style.scss';

import Routes from './routes';
import Header from './template/header';


export default props => (
    <main className="container">
        <Header/>
        <Routes/>
    </main>
)