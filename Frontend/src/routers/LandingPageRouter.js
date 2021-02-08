import React, { useContext } from 'react';

import { 
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import { AboutUsScreen } from '../components/AboutUsScreen/AboutUsScreen';
import { BlogScreen } from '../components/BlogScreen/BlogScreen';
import { CartScreen } from '../components/CartScreen/CartScreen';
import { FilterCategoriesScreen } from '../components/FilterCategoriesScreen/FilterCategoriesScreen';
import { LandingScreen } from '../components/LandingScreen/LandingScreen';

import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';

import { MyAccountScreen } from '../components/MyAccountScreen/MyAccountScreen';
import { CheckoutScreen } from '../components/CheckoutScreen/CheckoutScreen';
import { ContactScreen } from '../components/ContactScreen/ContactScreen';
import { AuthContext } from '../context/auth';

export const LandingPageRouter = () => {

    const { auth: { isLogged } } = useContext(AuthContext);
    
    return (
        <>
            <Header />
                <Switch>
                    <Route exact path="/home" component={ LandingScreen } />
                    <Route exact path="/categories" component={ FilterCategoriesScreen } />
                    <Route exact path="/blog" component={ BlogScreen } />
                    <Route exact path="/about" component={ AboutUsScreen } />
                    <Route exact path="/contact" component={ ContactScreen } />

                {
                    (isLogged) && 
                        <>
                            <Route exact path="/cart" component={ CartScreen } />
                            <Route exact path="/account" component={ MyAccountScreen } />
                            <Route exact path="/checkout" component={CheckoutScreen} />
                        </>
                }
                    <Redirect to="/home" />
                </Switch>
            <Footer />
        </>
    )
}
