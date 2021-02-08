import React from 'react';
import { FaAt, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const LoginScreen = () => {
    return (
        <fieldset className="auth__login-container">
            <Link to="/">
                <legend>
                    <img src="./assets/icons/hifive-logo.png" alt="hifive-logo" />
                </legend>
            </Link>
            
            <label>Log In</label>

            <div className="auth__layout">
                        
                <div className="auth__input-data">
                    <FaAt className="auth__icon"/>
                    <input 
                        type="text" 
                        placeholder="Email" 
                        name="email" 
                    />
                </div>
                <div className="auth__input-data">
                    <FaLock className="auth__icon" />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        name="password" 
                    />
                </div>
                    
            </div>
            <button className="btn auth__btn">Log In</button>
                <div className="auth__extra-options">
                    <div className="auth__sign-in-remember">
                        <input type="checkbox" />
                        <p>Remember Me</p>
                    </div>
                    <p>Forgot Password?</p>
                </div>
            <div className="auth__line" />
            <p className="auth__switch-auth">Don't have Account? <span><Link to="/register">REGISTER HERE</Link></span></p>
        </fieldset>
    )
}
