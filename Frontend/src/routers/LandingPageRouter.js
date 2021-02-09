import React, { useContext } from 'react';

import { 
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import { BlogScreen } from '../components/BlogScreen/BlogScreen';
import { CartScreen } from '../components/CartScreen/CartScreen';
import { FilterCategoriesScreen } from '../components/FilterCategoriesScreen/FilterCategoriesScreen';

import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';

import { MyAccountScreen } from '../components/MyAccountScreen/MyAccountScreen';
import { CheckoutScreen } from '../components/CheckoutScreen/CheckoutScreen';
import { ContactScreen } from '../components/ContactScreen/ContactScreen';
import { AuthContext } from '../context/auth';
import { PrivateRoute } from './PrivateRoute';
import { LandingPage } from '../screens/LandingPage';
import { AboutUsScreen } from '../screens/AboutUsScreen';

export const LandingPageRouter = () => {

    const { auth: { isLogged } } = useContext(AuthContext);
    
    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/home" component={ LandingPage } />
                <Route exact path="/categories" component={ FilterCategoriesScreen } />
                <Route exact path="/blog" component={ BlogScreen } />
                <Route exact path="/about" component={ AboutUsScreen } />
                <Route exact path="/contact" component={ ContactScreen } />

                <PrivateRoute
                    exact
                    path="/cart"
                    isAuthenticated={isLogged}
                    component={CartScreen}
                />
                <PrivateRoute
                    exact
                    path="/account"
                    isAuthenticated={isLogged}
                    component={MyAccountScreen}
                />
                <PrivateRoute
                    exact
                    path="/checkout"
                    isAuthenticated={isLogged}
                    component={CheckoutScreen}
                />
                <Redirect to="/home" />
            </Switch>
            <Footer />
        </>
    )
}
