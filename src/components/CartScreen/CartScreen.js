import React from 'react';
import { BannerImage } from '../BannerImage/BannerImage';
import { CartItems } from '../CartItems/CartItems';

import './CartScreen.css';

export const CartScreen = () => {
    return (
        <>
            <BannerImage image="cart-banner" mainText="Cart" height={ 50 } />
            <CartItems />
        </>
    )
}
