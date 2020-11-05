import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../../hooks/useUserContext';
import { BannerImage } from '../BannerImage/BannerImage';
import { CartItems } from '../CartItems/CartItems';

import './CartScreen.css';

export const CartScreen = () => {

    const { isLogged } = useContext(UserContext);

    return (
        <>
            { !isLogged && <Redirect to="/login" /> }
            <BannerImage image="cart-banner" mainText="Cart" height={ 50 } />
            <CartItems />
        </>
    )
}
