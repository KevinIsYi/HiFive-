import React, { useContext, useState } from 'react';
import { FaUser, FaLock, FaAt } from 'react-icons/fa';
import { Link, Redirect } from 'react-router-dom';
import { UserContext } from '../../hooks/useUserContext';

import { isValidUser } from '../../helpers/IsValidUser';
import { useForm } from '../../hooks/useForm';

import './LogInScreen.css';

export const LogInScreen = ({ history }) => {

    const { isLogged, setLogged } = useContext(UserContext);

    const text = [ 
        [ "Log In", 'Log In', "Don't have Account?", 'REGISTER HERE'], 
        [ 'Sign In', 'Create', 'Already have Account?', 'SIGN IN' ] 
    ];


    const [ formValues, handleInputChange    ] = useForm({
        'userName': '',
        'userEmail': '',
        'userPassword': '',
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

    const formSubmit = (e) => {
        e.preventDefault();
        if (signIn) {
            if (isValidUser(formValues)) {
                setLogged(true);
            }
            else {

            }
        }
        else {
            //email-validation, etc
        }
    }

    return (
        <>
            {
                isLogged && <Redirect to="/" />
            }
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
                                        <FaUser className="login-icon" />
                                        <input 
                                            type="text" 
                                            placeholder="Username" 
                                            name="userName" 
                                            value={ userName }
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
                                            type="password" 
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
        </>
    )
}