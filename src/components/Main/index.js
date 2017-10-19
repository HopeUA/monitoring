import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../Home';
import Monitoring from '../Monitoring';

function Main () {

    return (
        <main>
            <Route
                exact
                component = { Home }
                path = '/'
            />
            <Route
                component = { Monitoring }
                path = '/:page'
            />
        </main>
    );
}

export default Main;
