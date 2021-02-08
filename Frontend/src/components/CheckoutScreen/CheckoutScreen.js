import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { BannerImage } from '../BannerImage/BannerImage';
import './CheckoutScreen.css';

export const CheckoutScreen = () => {


    const [ formValues, setFormValues ] = useState({
        street: '',
        address1: '',
        address2: '',
        city: '',
        zipCode: '',
        phoneNumber: '',
        cardNumber: '',
        cardName: '',
        cardMonth: '',
        cardYear: ''
    });

    const { street, address1, address2, city, zipCode, phoneNumber, cardNumber, cardName, cardMonth, cardYear } = formValues;

    const handleFormInputChange = ({ target }) => {
        const { name, value } = target;

        setFormValues({
            ...formValues,
            [ name ]: value
        });

        console.log(formValues);
    }

    const submitCheckoutForm = (e) => {
        e.preventDefault();
    }
    
    /*
    if (!isLogged) {
        return <Redirect to="/login" />;
    }
    */

    return (
        <>
            <BannerImage
                image="checkout-banner"
                mainText="Checkout"
                height={ 50 }
            />
            <form 
                className="checkout"
                onSubmit={ submitCheckoutForm }
            >
                <fieldset className="checkout-info">
                    <legend>Address</legend>
                    <h5>Street *</h5>
                    <input
                        type="text"
                        placeholder="i.e. Av. Saint Johns"
                        name="street"
                        value={ street }
                        onChange={ handleFormInputChange }
                    />
                    <h5>Address 1 *</h5>
                    <input
                        type="text"
                        placeholder="101, 356, 489, etc"
                        name="address1"
                        value={ address1 }
                        onChange={ handleFormInputChange }
                    />
                    <h5>Address 2</h5>
                    <input
                        type="text"
                        placeholder="Apartment 5, Floor 5, etc"
                        name="address2"
                        value={ address2 }
                        onChange={ handleFormInputChange }
                    />
                    <h5>City *</h5>
                    <input
                        type="text"
                        name="city"
                        value={ city }
                        onChange={ handleFormInputChange }
                    />
                    <h5>Zip Code *</h5>
                    <input
                        type="text"
                        placeholder="i.e. 45123"
                        name="zipCode"
                        value={ zipCode }
                        onChange={ handleFormInputChange }
                    />
                    <h5>Phone Number *</h5>
                    <input
                        type="text"
                        placeholder="i.e. 3345784512"
                        name="phoneNumber"
                        value={ phoneNumber }
                        onChange={ handleFormInputChange }
                    />
                </fieldset>

                <fieldset className="checkout-info">
                    <legend>Payment</legend>
                    <h5>Card Number *</h5>
                    <input
                        type="text"
                        placeholder="xxxx xxxx xxxx xxxx"
                        name="cardNumber"
                        value={ cardNumber }
                        onChange={ handleFormInputChange }
                    />
                    <h5>Name on Card *</h5>
                    <input
                        type="text"
                        name="cardName"
                        value={ cardName }
                        onChange={ handleFormInputChange }
                    />
                    <div className="expiration-info">
                        <h1>Expiration Date</h1>
                        <h5>Month *</h5>
                        <input 
                            type="text"
                            placeholder="01"
                            name="cardMonth"
                            value={ cardMonth }
                            onChange={ handleFormInputChange }
                        />
                        <h5>Year *</h5>
                        <input 
                            type="text"
                            placeholder="2024"
                            name="cardYear"
                            value={ cardYear }
                            onChange={ handleFormInputChange }
                        />
                    </div>
                </fieldset>

                <button className="btn checkout-btn">Pay</button>
            </form>
        </>
    )
}
