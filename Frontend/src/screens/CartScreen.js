import React from 'react';
import { BannerImage } from '../components/BannerImage/BannerImage';
import { CartItems } from '../components/CartItems/CartItems';

export const CartScreen = () => {


    return (
        <>
            <BannerImage image="cart-banner" mainText="Cart" height={ 50 } />
            <CartItems />
        </>
    )
}
