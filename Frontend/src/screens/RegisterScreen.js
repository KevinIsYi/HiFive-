import React from 'react'
import { FaAt, FaLock, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const RegisterScreen = () => {
    return (
        <fieldset className="auth__login-container">
            <Link to="/"><legend><img src="./assets/icons/hifive-logo.png" alt="hifive-logo"/></legend></Link>
            
            <label>Sign In</label>
            <div className="auth__layout">
                <div className="auth__input-data">
                    <FaUser className="auth__icon" />
                    <input 
                        type="text" 
                        placeholder="Name" 
                        name="name"
                    />
                </div>
                <div className="auth__input-data">
                    <FaUser className="auth__icon" />
                    <input 
                        type="text" 
                        placeholder="Last Name" 
                        name="lastName" 
                    />
                </div>
                <div className="auth__input-data">
                    <FaAt className="auth__icon" />
                    <input 
                        type="email" 
                        placeholder="E-mail" 
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
                <div className="auth__input-data">
                    <FaLock className="auth__icon" />
                    <input
                        type="password" 
                        placeholder="Confirm Password" 
                        name="confirmPassword" 
                    />
                </div>
            </div>
            <button className="btn auth__btn">Log In</button>
            <p className="auth__terms-conditions">By creating an account, you agree to HiFive's<span> Conditions of Use</span> and <span> Privacy Notice</span></p>
            <div className="auth__line" />
            <p className="auth__switch-auth">Already have Account? <span><Link to="/login">Log In</Link></span></p>
        </fieldset>
    )
}
