import React from 'react';
import cartIcon from './shopping-cart-solid.svg';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './app-header.scss';

const AppHeader = ({items}) => {
    const total = items.reduce((total, item) => total + item.volume * item.price, 0)
    return (
        <header className="header">
            <Link to='/main' className="header__link">
                Menu
            </Link>
            <Link to='/cart' className="header__link">
                <img className="header__cart" src={cartIcon} alt="cart"></img>
                Total: {total} $
            </Link>
        </header>
    )
};

const mapStateToProps = ({items}) => {
    return {items}
};

export default connect(mapStateToProps)(AppHeader);


