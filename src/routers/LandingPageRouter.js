import React, { useState } from 'react';

import { 
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import { BlogScreen } from '../components/BlogScreen/BlogScreen';
import { CartScreen } from '../components/CartScreen/CartScreen';
import { FilterCategoriesScreen } from '../components/FilterCategoriesScreen/FilterCategoriesScreen';
import { LandingScreen } from '../components/LandingScreen/LandingScreen';

import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';

import { UserCategory } from '../hooks/useUserCategory';

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

                        <Redirect to="/ " />
                    </Switch>
                </>
            
            <Footer />
        </UserCategory.Provider>
    )
}
