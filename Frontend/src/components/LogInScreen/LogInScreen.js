import React, { useContext, useState } from 'react';
import { FaUser, FaLock, FaAt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useForm } from '../../hooks/useForm';

import './LogInScreen.css';

export const LogInScreen = ({ history }) => {

    //const { isLogged, setLogged } = useContext(UserContext);
    //console.log(`Is logged: ${ isLogged }`);

    const text = [ 
        [ "Log In", 'Log In', "Don't have Account?", 'REGISTER HERE'], 
        [ 'Sign In', 'Create', 'Already have Account?', 'SIGN IN' ] 
    ];


    const [ formValues, handleInputChange    ] = useForm({
        'name': '',
        'lastName': '',
        'email': '',
        'password': '',
        'confirmPassword': ''
    });

    const { name, lastName, email, password, confirmPassword } = formValues;
    const [ signIn, setSignIn ] = useState(true);
    const [ position, setPosition ] = useState(0);

    const changeLayout = () => {
        const newPos = (position + 1) % 2;
        setSignIn(!signIn);
        setPosition(newPos);
    }

    const formSubmit = async (e) => {
        e.preventDefault();
        if (signIn) {
            let url = 'http://localhost:4000/api/auth/login';
            let req = await fetch(url, {
                method: 'GET',
                headers: {
                    'email': email,
                    'password': password
                }
            });
            const { ok, id, name, lastName, message } = await req.json();
            console.log("OK INICIO: ", ok);

            if (ok) {
                //setLogged(id);
                url = 'http://localhost:4000/api/items/getshoppingcart'
                req = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'userid': id
                    }
                });
                const resp = await req.json();
                console.log("RES CARR", resp);

                if (resp.ok) {
                    localStorage.setItem('scitems', JSON.stringify(resp.items.filter(item => item.available > 0)));
                    localStorage.setItem('sc-deleted-items', JSON.stringify([]));
                    localStorage.setItem('change', false);
                }
                Swal.fire('Welcome', `${name} ${lastName}`, 'success');
                history.replace('/categories');
                //console.log(isLogged);
            }
            else {
                Swal.fire('Error', message, 'error');
            }
        }
        else {
            const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

            console.log("Entramos");

            if (password === confirmPassword && 
                name.length > 0 && 
                lastName.length > 0 &&
                password.length > 0 &&
                regex.test(email)) {

                const url = 'http://localhost:4000/api/auth';
                console.log(formValues);
                
                const req = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        name,
                        lastName,
                        email,
                        password
                    })
                })
                const resp = await req.json();
                console.log(resp);
                if (resp.ok) {
                    //setLogged(resp.id);
                    Swal.fire('Welcome', 'Your account has been created', 'success');
                    history.replace('/categories');
                }
                else {
                    Swal.fire('Error', 'Something is wrong with your information', 'error');
                }
            }
            else {
                Swal.fire('Error', 'Something is wrong with your information', 'error');
            }
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
                                        name="email" 
                                        value={ email }
                                        onChange={ handleInputChange }  
                                    />
                                </div>
                                <div className="login-input">
                                    <FaLock className="login-icon" />
                                    <input 
                                        type="password" 
                                        placeholder="Password" 
                                        name="password" 
                                        value={ password }
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
                                        placeholder="Name" 
                                        name="name" 
                                        value={ name }
                                        onChange={ handleInputChange }
                                    />
                                </div>
                                <div className="login-input">
                                    <FaUser className="login-icon"/>
                                    <input 
                                        type="text" 
                                        placeholder="Last Name" 
                                        name="lastName" 
                                        value={ lastName }
                                        onChange={ handleInputChange }
                                    />
                                </div>
                                <div className="login-input">
                                    <FaAt className="login-icon"/>
                                    <input 
                                        type="email" 
                                        placeholder="E-mail" 
                                        name="email" 
                                        value={ email }
                                        onChange={ handleInputChange }
                                    />
                                </div>
                                <div className="login-input">
                                    <FaLock className="login-icon"/>
                                    <input 
                                        type="password" 
                                        placeholder="Password" 
                                        name="password" 
                                        value={ password }
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
                        <div className="auth__extra-options">
                            <div className="auth__sign-in-remember">
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