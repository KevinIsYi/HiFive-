import React, { useState } from 'react';

import { 
    Switch,
    Route,
    Redirect,
    Router
} from 'react-router-dom';

import { AboutUsScreen } from '../components/AboutUsScreen/AboutUsScreen';
import { BlogScreen } from '../components/BlogScreen/BlogScreen';
import { CartScreen } from '../components/CartScreen/CartScreen';
import { FilterCategoriesScreen } from '../components/FilterCategoriesScreen/FilterCategoriesScreen';
import { LandingScreen } from '../components/LandingScreen/LandingScreen';

import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';

import { UserCategory } from '../hooks/useUserCategory';
import { MyAccountScreen } from '../components/MyAccountScreen/MyAccountScreen';
import { CheckoutScreen } from '../components/CheckoutScreen/CheckoutScreen';
import { ContactScreen } from '../components/ContactScreen/ContactScreen';

export const LandingPageRouter = () => {

    const [ category, setCategory ] = useState('0');
    
    return (
        <UserCategory.Provider value={{ category, setCategory }}>
            <Header />
                <>
                    <Switch>
                        <Route path="/ " component={ LandingScreen } />
                        <Route exact path="/categories" component={ FilterCategoriesScreen } />
                        <Route exact path="/cart" component={ CartScreen } />
                        <Route exact path="/blog" component={ BlogScreen } />
                        <Route exact path="/about" component={ AboutUsScreen } />
                        <Route exact path="/account" component={ MyAccountScreen } />
                        <Route exact path="/checkout" component={ CheckoutScreen } />
                        <Route exact path="/contact" component={ ContactScreen } />

                        <Redirect to="/ " />
                    </Switch>
                </>
            
            <Footer />
        </UserCategory.Provider>
    )
}
