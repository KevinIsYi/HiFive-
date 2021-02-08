import React, { useContext } from 'react';
import Media from 'react-media';

import { BsPerson } from 'react-icons/bs';
import { GoThreeBars } from 'react-icons/go';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { AiOutlineLogout } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import { updateShoppingCart } from '../../helpers/updateShoppingCart';

import './Header.css';

export const Header = () => {

    const logoImageName = 'hifive-logo';
    const mediaQueries = { // There are regular media querys in the CSS file
        mobile: "(max-width: 900px)"
    }
    //const { isLogged, setLogged  } = useContext(UserContext);
    const linkCart = '' //isLogged ? '/cart' : '/login';
    const linkLogged = '' //isLogged ? '/account' : '/login';

    const logOut = () => {
        //updateShoppingCart(isLogged);
        //setLogged(false);
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
                <Link to={ linkCart }><HiOutlineShoppingBag className="icon" /></Link>
                <div className="division" />
                <Link to={ linkLogged }><BsPerson className="icon" /></Link>
                { 
                    /*
                    isLogged &&  
                        <>
                            <div className="division" />
                            <AiOutlineLogout 
                                className="icon" 
                                onClick={ logOut }
                            />
                    </>
                    */
                }
            </div>
            
        </header>
    )
}
