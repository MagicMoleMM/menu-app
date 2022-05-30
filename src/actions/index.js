import { createAction } from '@reduxjs/toolkit'

const menuLoaded = createAction('MENU_LOADED');
const menuRequested = createAction('MENU_REQUESTED');
const addedToCart = createAction('ITEM_ADD_TO_CART');
const deleteFromCart = createAction('ITEM_REMOVE_FROM_CART');


export {
    menuLoaded,
    menuRequested,
    addedToCart,
    deleteFromCart
};