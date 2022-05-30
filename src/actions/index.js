import { createAction } from '@reduxjs/toolkit'

const menuLoaded = createAction('MENU_LOADED');
const menuRequested = createAction('MENU_REQUESTED');
// const addedToCart = createAction('ITEM_ADD_TO_CART');

const addedToCart = (id) => {
    return {
        type: 'ITEM_ADD_TO_CART',
        payload: id
    }
};

export {
    menuLoaded,
    menuRequested,
    addedToCart
};