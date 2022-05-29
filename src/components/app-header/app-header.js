import React from 'react';
import cartIcon from './shopping-cart-solid.svg';
import './app-header.scss';

const AppHeader = ({total}) => {
    return (
        <header className="header">
            <a className="header__link" href="https://www.npmjs.com">
                Menu
            </a>
            <a className="header__link" href="https://www.npmjs.com">
                <img className="header__cart" src={cartIcon} alt="cart"></img>
                Total: {total} $
            </a>
        </header>
    )
};

export default AppHeader;