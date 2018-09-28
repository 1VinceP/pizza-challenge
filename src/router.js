import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './views/Home/Home';
import LocationPage from './views/LocationPage/LocationPage';
import Admin from './views/Admin/Admin';

export default (
    <Switch>

        <Route exact path='/' component={Home} />
        <Route path='/location/:city' component={LocationPage} />
        <Route path='/admin' component={Admin} />

    </Switch>
)