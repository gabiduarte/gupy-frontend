import React from 'react';
import Routes from './routes';
import Header from './template/header';

import './../sass/style.scss';

export default props => (
    <div>
        <Header/>
        <Routes/>
    </div>
)