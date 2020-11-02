import React from 'react';
import Media from 'react-media';

import { BsPerson } from 'react-icons/bs';
import { GoThreeBars } from 'react-icons/go';
import { HiOutlineShoppingBag } from 'react-icons/hi';

import './Header.css';

export const Header = () => {

    const logoImageName = 'hifive-logo';
    const mediaQueries = { // There are regular media querys in the CSS file
        mobile: "(max-width: 900px)"
    }

    return (
        <header className="header center">
            
             <Media queries={ mediaQueries }>
                {({ mobile }) => (
                    <>
                        {
                            mobile
                            ?
                                <>
                                    <GoThreeBars className="icon" />
                                    <img src={ `./assets/icons/${ logoImageName }.png` } alt={ logoImageName } />
                                </>
                            :
                                <>
                                    <img src={ `./assets/icons/${ logoImageName }.png` } alt={ logoImageName } />
                                    <nav className="nav-options">
                                        <p>Home</p>
                                        <p>Shop</p>
                                        <p>Blog</p>
                                        <p>About Us</p>
                                        <p>Contact</p>
                                    </nav>
                                </>
                        }
                    </>
                )}
            </Media>

            <div className="sign-in-section">
                <HiOutlineShoppingBag className="icon" />
                <div className="division" />
                <BsPerson className="icon" />
            </div>
        </header>
    )
}
