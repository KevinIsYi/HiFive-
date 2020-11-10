import React from 'react';
import { useForm } from '../../hooks/useForm';
import { BannerImage } from '../BannerImage/BannerImage';

import './ContactScreen.css';

export const ContactScreen = () => {

    const contactSubmit = (e) => {
        e.preventDefault();
    }

    const [ formValues, handleInputChange ] = useForm({
        title: '',
        bodyMessage:''
    });

    const { title, bodyMessage } = formValues;

    return (
        <>
            <BannerImage 
                image="contact-banner"
                height={ 70 }
                mainText="Contact"
            />
            <form 
                className="contact-form"
                onSubmit={ contactSubmit }
            >
                <fieldset className="contact">
                    <legend>Contact Us</legend>
                    <h1>Title</h1>
                    <input
                        name="title"
                        placeholder="Issue"
                        value={ title }
                        onChange={ handleInputChange }
                    />
                    <h1>Concern</h1>
                    <textarea 
                        name="bodyMessage"
                        value={ bodyMessage }
                        onChange={ handleInputChange }
                    />
                </fieldset>
            </form>
        </>
    )
}
