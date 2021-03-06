import React from 'react';
import { connect } from 'react-redux';
import { deleteFromCart } from '../../actions';
import './cart-table.scss';

const CartTable = ({items, deleteFromCart}) => {

    const total = items.reduce((total, item) => total + item.volume * item.price, 0)
    
    return (
        <>
            <div className="cart__title">Ваш заказ: {total}$</div>
            <div className="cart__list">
                {
                    items.map(item => {
                        const {price, title, url, id, volume} = item;
                        const subTotal = price * volume
                        return (
                        <div key={id} className="cart__item">
                                <img src={url} className="cart__item-img" alt={title}></img>
                                <div className="cart__item-title">{title}</div>
                                <div className="cart__item-price">{price}$</div>
                                <div className="cart__item-price">{volume}</div>
                                <div className="cart__item-price">{subTotal}$</div>
                                <div onClick={() => deleteFromCart(id)} className="cart__close">&times;</div>
                        </div>
                        )
                    })
                    
                }
 
            </div>
        </>
    );
};

const mapStateToProps = ({items}) => {
    return {items}
};

const mapDispatchToProps =  {
    deleteFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);