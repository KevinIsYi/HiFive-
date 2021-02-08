import React, { useContext, useState } from 'react'

import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import { LandingPageRouter } from './LandingPageRouter';
import { AuthContext } from '../context/auth';
import { LoginScreen } from '../screens/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen';

export const AppRouter = () => {

    const { auth: { isLogged } } = useContext(AuthContext);

    return (
        <Router>
            <Switch>
                {
                    (!isLogged) &&
                    <>
                        <Route
                            exact
                            path="/login"
                            component={LoginScreen}
                        />
                        <Route 
                            exact
                            path="/register"
                            component={RegisterScreen}
                        />
                    </>
                }
                <Route 
                    path="/"
                    component={LandingPageRouter} 
                />
                <Redirect to="/" />
            </Switch>
        </Router>
    )
}
