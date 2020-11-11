import React, { useState } from 'react'

import { 
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import { LandingPageRouter } from './LandingPageRouter';
import { UserContext } from '../hooks/useUserContext';
import { LogInScreen } from '../components/LogInScreen/LogInScreen';
import { AdminRouter } from './AdminRouter';

export const AppRouter = () => {

    const [ isLogged, setLogged ] = useState(false);

    return (
        <UserContext.Provider value={{ isLogged, setLogged }}>
            <Router>
                <>
                    <Switch>
                        <Route exact path="/login" component={ LogInScreen } />
                        <Route exact path="/admin" component={ AdminRouter } />

                        <Route path="/" component={ LandingPageRouter }/>
                    </Switch>
                </>
            </Router>
        </UserContext.Provider>
    )
}
