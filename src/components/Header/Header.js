import React from 'react';
import Media from 'react-media';

import { BsPerson } from 'react-icons/bs';
import { GoThreeBars } from 'react-icons/go';
import { HiOutlineShoppingBag } from 'react-icons/hi';

import './Header.css';
import { Link } from 'react-router-dom';

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
                                    <Link to="/"><img className="hifive-logo" src={ `./assets/icons/${ logoImageName }.png` } alt={ logoImageName } /></Link>
                                </>
                            :
                                <>
                                    <Link to="/"><img className="hifive-logo" src={ `./assets/icons/${ logoImageName }.png` } alt={ logoImageName } /></Link>
                                    <nav className="nav-options">
                                        <Link to="/">Home</Link>
                                        <Link to="/categories">Shop</Link>
                                        <Link to="/blog">Blog</Link>
                                        <Link to="/about">About Us</Link>
                                        <Link to="/contact">Contact</Link>
                                    </nav>
                                </>
                        }
                    </>
                )}
            </Media>

            <div className="sign-in-section">
                <Link to="/cart"><HiOutlineShoppingBag className="icon" /></Link>
                <div className="division" />
                <Link to="/login"><BsPerson className="icon" /></Link>
            </div>
        </header>
    )
}
