import React, { useState } from 'react'

import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import { LandingPageRouter } from './LandingPageRouter';
import { UserContext } from '../hooks/useUserContext';
import { LogInScreen } from '../components/LogInScreen/LogInScreen';
import { AdminScreen } from '../components/AdminScreen/AdminScreen';

export const AppRouter = () => {

    const [ isLogged, setLogged ] = useState(false);

    return (
        <UserContext.Provider value={{ isLogged, setLogged }}>
            <Router>
                <>
                    <Switch>
                        <Route exact path="/login" component={ LogInScreen } />
                        <Route exact path="/admin" component={ AdminScreen } />

                        <Route path="/" component={ LandingPageRouter }/>
                        <Redirect to="/" />
                    </Switch>
                </>
            </Router>
        </UserContext.Provider>
    )
}
