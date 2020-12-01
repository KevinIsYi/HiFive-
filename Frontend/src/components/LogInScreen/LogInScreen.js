import React, { useContext, useState } from 'react';
import { FaUser, FaLock, FaAt } from 'react-icons/fa';
import { Link, Redirect } from 'react-router-dom';
import { UserContext } from '../../hooks/useUserContext';
import { useForm } from '../../hooks/useForm';

import './LogInScreen.css';

export const LogInScreen = ({ history }) => {

    const { isLogged, setLogged } = useContext(UserContext);
    console.log(`Is logged: ${ isLogged }`);

    const text = [ 
        [ "Log In", 'Log In', "Don't have Account?", 'REGISTER HERE'], 
        [ 'Sign In', 'Create', 'Already have Account?', 'SIGN IN' ] 
    ];


    const [ formValues, handleInputChange    ] = useForm({
        'userName': '',
        'userEmail': 'kevin@kevin.com',
        'userPassword': '12345678',
        'confirmPassword': ''
    });

    const { userName, userEmail, userPassword, confirmPassword } = formValues;
    const [ signIn, setSignIn ] = useState(true);
    const [ position, setPosition ] = useState(0);

    const changeLayout = () => {
        const newPos = (position + 1) % 2;
        setSignIn(!signIn);
        setPosition(newPos);
    }

    const saveShoppingCartItems = async (id) => {
        const items = JSON.parse(localStorage.getItem('scitems'));
        const cartItems = items.map(({ _id, quantity }) => ({ itemId: _id, quantity }));
        console.log("PRODUCTOS: ", cartItems);
        const change = JSON.parse( localStorage.getItem('change'));
        const deletedItems = JSON.parse(localStorage.getItem('sc-deleted-items'));
        console.log("BORRAR:", deletedItems);
        if (change) {
            localStorage.setItem('change', false);
            const url = 'http://localhost:4000/api/items/setshoppingcart'
            try {
                const req = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        userId: id,
                        updateItems: cartItems,
                        deletedItems
                    })
                });
                const resp = await req.json();
                console.log("RESPUESTA: ", resp);
                localStorage.setItem('change', false);
                localStorage.setItem('sc-deleted-items', JSON.stringify([]));
            } catch (error) {
                console.log(error);
            }
        }
    }

    const formSubmit = async (e) => {
        e.preventDefault();
        if (signIn) {
            let url = 'http://localhost:4000/api/auth/login';
            let req = await fetch(url, {
                method: 'GET',
                headers: {
                    'email': userEmail,
                    'password': userPassword
                }
            });
            const { ok, id } = await req.json();

            if (ok) {
                setLogged(id);
                url = 'http://localhost:4000/api/items/getshoppingcart'
                req = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'userid': id
                    }
                });
                const resp = await req.json();
                console.log(resp);

                if (resp.ok) {
                    localStorage.setItem('scitems', JSON.stringify(resp.items));
                    localStorage.setItem('sc-deleted-items', JSON.stringify([]));
                    localStorage.setItem('change', false);
                }
                document.addEventListener('visibilitychange', () => saveShoppingCartItems(id));
                document.addEventListener('onblur', () => saveShoppingCartItems(id));
                history.replace('/categories');
                console.log(isLogged);
            }
            else {

            }
        }
        else {
            //email-validation, etc
        }
    }

    return (
        <fieldset className="login-container">
            <Link to="/"><legend><img src="./assets/icons/hifive-logo.png" alt="hifive-logo"/></legend></Link>
            
            <label>{ text[position][0] } </label>

            <div className="user-log-data">
                {
                    signIn
                    ?
                        (
                            <>
                                <div className="login-input">
                                    <FaAt className="login-icon"/>
                                    <input 
                                        type="text" 
                                        placeholder="Email" 
                                        name="userEmail" 
                                        value={ userEmail }
                                        onChange={ handleInputChange }  
                                    />
                                </div>
                                <div className="login-input">
                                    <FaLock className="login-icon" />
                                    <input 
                                        type="password" 
                                        placeholder="Password" 
                                        name="userPassword" 
                                        value={ userPassword }
                                        onChange={ handleInputChange }
                                    />
                                </div>
                            </>
                        )
                    :
                        (
                            <>
                                <div className="login-input">
                                    <FaUser className="login-icon"/>
                                    <input 
                                        type="text" 
                                        placeholder="Username" 
                                        name="userName" 
                                        value={ userName }
                                        onChange={ handleInputChange }
                                    />
                                </div>
                                <div className="login-input">
                                    <FaAt className="login-icon"/>
                                    <input 
                                        type="email" 
                                        placeholder="E-mail" 
                                        name="userEmail" 
                                        value={ userEmail }
                                        onChange={ handleInputChange }
                                    />
                                </div>
                                <div className="login-input">
                                    <FaLock className="login-icon"/>
                                    <input 
                                        type="password" 
                                        placeholder="Password" 
                                        name="userPassword" 
                                        value={ userPassword }
                                        onChange={ handleInputChange }
                                    />
                                </div>
                                <div className="login-input">
                                    <FaLock className="login-icon"/>
                                    <input 
                                        type="password" 
                                        placeholder="Confirm Password" 
                                        name="confirmPassword" 
                                        value={ confirmPassword }
                                        onChange={ handleInputChange }
                                    />
                                </div>
                            </>
                        )
                }
            </div>
            <button className="btn btn-login" onClick={ formSubmit }>{ text[position][1] }</button>
            {
                signIn 
                ?
                    (
                        <div className="extra-signin-options">
                            <div className="sign-in-remember">
                                <input type="checkbox" />
                                <p>Remember Me</p>
                            </div>
                            <p>Forgot Password?</p>
                        </div>
                    )
                :
                    (
                        <>
                            <p className="terms-conditions">By creating an account, you agree to Lerma's
                                <span> Conditions of Use</span> and <span> Privacy Notice</span>
                            </p>
                        </>
                    )
            }
            <div className='sign-in-line' />
            <p className="sign-in-create-acc">{ text[position][2] } <span onClick={ changeLayout } >{ text[position][3] } </span></p>
        </fieldset>
    )
}