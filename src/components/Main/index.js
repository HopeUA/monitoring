import React from 'react';
import { Route } from 'react-router-dom';
import Monitoring from '../Monitoring';

function Main () {

    return (
        <main>
            <Route
                component = { Monitoring }
                path = '/:page'
            />
        </main>
    );
}

export default Main;
