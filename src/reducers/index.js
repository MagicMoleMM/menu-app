const initialState = {
    menu: [],
    loading:true,
    items: []

}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case 'MENU_LOADED':
            return {
                ...state,
                menu: action.payload,
                loading: false
            };
        case 'MENU_REQUESTED':
            return {
                ...state,
                menu: state.menu,
                loading: true
            };
        case 'ITEM_ADD_TO_CART':
            const id = action.payload;
            const repeat = state.items.find((item) => item.id === id);
            const item = state.menu.find((item) => item.id === id);
            if (!repeat && item) {
                
                const newItem = {
                    title: item.title,
                    price: item.price,
                    url: item.url,
                    id: item.id,
                    volume: 1
                };
                return {
                    ...state,
                    items: [...state.items, newItem],
                    
                };
            } else if (repeat && item) {
                const repeatIndex = state.items.findIndex((item) => item.id === id)
                const repeatItem = {
                    title: item.title,
                    price: item.price,
                    url: item.url,
                    id: item.id,
                    volume: repeat.volume + 1
                };
                return {
                    ...state,
                    items: [
                        ...state.items.slice(0, repeatIndex), 
                        repeatItem,
                        ...state.items.slice(repeatIndex + 1) 
                    ]
                };
            } else {
                return {...state}
            }

        case 'ITEM_REMOVE_FROM_CART':
            const idx = action.payload;
            const itemIndex = state.items.findIndex((item) => item.id === idx);
            return {
                ...state,
                items: [
                    ...state.items.slice(0, itemIndex), 
                    ...state.items.slice(itemIndex + 1)
                    
                ]
            };
        default:
            return state;
    }
}

export default reducer;