import React, { useContext } from 'react';
import { 
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import { AuthContext } from '../context/auth';
import { AboutUsScreen } from '../screens/AboutUsScreen';
import { CheckoutScreen } from '../components/CheckoutScreen/CheckoutScreen';
import { FilterCategoriesScreen } from '../screens/FilterCategoriesScreen';
import { MyAccountScreen } from '../components/MyAccountScreen/MyAccountScreen';

import { BlogScreen } from '../screens/BlogScreen';
import { CartScreen } from '../screens/CartScreen';
import { ContactScreen } from '../screens/ContactScreen';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { LandingPage } from '../screens/LandingPage';
import { PrivateRoute } from './PrivateRoute';

export const LandingPageRouter = () => {

    const { auth: { isLogged } } = useContext(AuthContext);
    
    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/home" component={LandingPage} />
                <Route exact path="/categories" component={FilterCategoriesScreen} />
                <Route exact path="/blog" component={BlogScreen} />
                <Route exact path="/about" component={AboutUsScreen} />
                <Route exact path="/contact" component={ContactScreen} />

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
