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
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

    const { auth: { isLogged } } = useContext(AuthContext);

    return (
        <Router>
            <>
                <Switch> 
                    <PublicRoute
                        exact
                        path="/login"
                        isAuthenticated={isLogged}
                        component={LoginScreen}
                    />
                    <PublicRoute
                        exact
                        path="/register"
                        isAuthenticated={isLogged}
                        component={RegisterScreen}
                    />
                    <Route 
                        path="/"
                        component={LandingPageRouter} 
                    />
                    <Redirect to="/" />
                </Switch>
                </>
        </Router>
    )
}
