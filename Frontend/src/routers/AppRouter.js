import React, { useContext } from 'react'
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import { AuthContext } from '../context/auth';
import { LandingPageRouter } from './LandingPageRouter';
import { LoginScreen } from '../screens/LoginScreen';
import { PublicRoute } from './PublicRoute';
import { RegisterScreen } from '../screens/RegisterScreen';

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
