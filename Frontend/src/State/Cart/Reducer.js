import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS } from "../ActionType";

const initialState = {
    cartItems: [],
    isLoading: false,
    error: null,
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM_TO_CART_REQUEST:
        case GET_CART_REQUEST:
            return { ...state, isLoading: true, error: null };
        case ADD_ITEM_TO_CART_SUCCESS:
            return { ...state, isLoading: false, error: null }; // Chỉ cập nhật isLoading và error
        case GET_CART_SUCCESS:
            return { ...state, isLoading: false, error: null, cart: action.payload };
        case ADD_ITEM_TO_CART_FAILURE:
        case GET_CART_FAILURE:
            return { ...state, isLoading: false, error: action.payload };
        default:
            return state;
    }
};
