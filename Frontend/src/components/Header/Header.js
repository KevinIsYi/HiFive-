import React from 'react';

import { BsPerson } from 'react-icons/bs';
import { GoThreeBars } from 'react-icons/go';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { Link } from 'react-router-dom';

export const Header = () => {

    const logoImageName = 'hifive-logo';

    return (
        <header className="center header__header">
            <GoThreeBars className="header__header-icon header__handbag_icon" />

            <Link to="/">
                <img className="header__hifive-logo" src={`./assets/icons/${logoImageName}.png`} alt={logoImageName} />
            </Link>
            
            <nav className="header__nav-options">
                <Link to="/">Home</Link>
                <Link to="/categories">Shop</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact</Link>
            </nav>

            <div className="header__sign-in-section">
                <Link>
                    <HiOutlineShoppingBag className="header__header-icon" />
                </Link>
                <div className="header__division" />
                <Link>
                    <BsPerson className="header__header-icon" />
                </Link>
            </div>
        </header>
    )
}
