import React from 'react';

import { AiOutlineShopping } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';
import { MdPersonOutline } from 'react-icons/md';
import Media from 'react-media';

import './Header.css';

export const Header = () => {

    const screenSizes = {
        mobile: "(max-width: 768px)",
    };

    return (
        <header className="header center">
            <Media queries={ screenSizes }>
                {
                    ({ mobile }) => 
                        <>
                            {
                                mobile 
                                ? 
                                    (
                                        <>
                                            <FaBars className="mobile-icon" />
                                            <img src="./images/logo.png" alt="logo" />
                                        </>
                                    )
                                :
                                    (
                                        <>
                                            <img src="./images/logo.png" alt="logo" />
                                
                                            <nav className="nav-options">
                                                <h1>Home</h1>
                                                <h1>Shop</h1>
                                                <h1>Blog</h1>
                                                <h1>About</h1>
                                                <h1>Contact</h1>
                                            </nav>
                                        </>
                                    )
                            }
                        </>
                }
            </Media>
            <div className="icons">
                <AiOutlineShopping className="ai-icon" />
                <div className="line" />
                <MdPersonOutline className="ai-icon" />
            </div>
        </header>
    ) 
}
