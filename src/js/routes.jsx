import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Candidate from './candidate/candidate';
import Resume from './resume/resume';

export default props => (
    <Router>
        <Switch>
            <Route exact path="/" component={Resume} />
            <Route exact path="/candidate" component={Candidate}/>
            <Route path="*" component={Resume}/>
        </Switch>
    </Router>
)