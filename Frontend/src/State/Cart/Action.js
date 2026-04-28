import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS } from "../ActionType";
import axios from "axios";
import { API_BASE_URL } from "../../config/apiConfig";

export const addItemToCart = (reqData) => async (dispatch) => {
    dispatch({ type: ADD_ITEM_TO_CART_REQUEST });
    try {
        const { productId, size, color } = reqData;
        const { data } = await axios.put(`${API_BASE_URL}/api/cart/add`, { productId, size, color }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            },
        });
        console.log("add item to cart ", data)
        dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: data });
        dispatch(getCart()); // Thêm dòng này để tải lại giỏ hàng sau khi thêm thành công
    } catch (error) {
        dispatch({ type: ADD_ITEM_TO_CART_FAILURE, payload: error.message });
    }
};

export const getCart = () => async (dispatch) => {
    dispatch({ type: GET_CART_REQUEST });
    try {
        const { data } = await axios.get(`${API_BASE_URL}/api/cart/`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            },
        });
        console.log("cart ", data);
        dispatch({ type: GET_CART_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_CART_FAILURE, payload: error.message });
    }
};

// Xóa sản phẩm khỏi giỏ
export const removeCartItem = (cartItemId) => async (dispatch) => {
  dispatch({ type: "REMOVE_CART_ITEM_REQUEST" });
  try {
    await axios.delete(`/api/cart_items/${cartItemId}`);
    dispatch({ type: "REMOVE_CART_ITEM_SUCCESS", payload: cartItemId });
    // Sau khi xóa thành công, lấy lại giỏ hàng mới để cập nhật tổng tiền
    dispatch(getCart());
  } catch (error) {
    dispatch({ type: "REMOVE_CART_ITEM_FAILURE", payload: error.message });
  }
};

// Cập nhật số lượng (Tăng/Giảm)
export const updateCartItem = (reqData) => async (dispatch) => {
  dispatch({ type: "UPDATE_CART_ITEM_REQUEST" });
  try {
    // reqData gồm: { cartItemId, data: { quantity: newQuantity } }
    const { data } = await axios.put(`/api/cart_items/${reqData.cartItemId}`, reqData.data);
    dispatch({ type: "UPDATE_CART_ITEM_SUCCESS", payload: data });
    // Cập nhật xong cũng gọi lại giỏ hàng để nhảy số tiền
    dispatch(getCart());
  } catch (error) {
    dispatch({ type: "UPDATE_CART_ITEM_FAILURE", payload: error.message });
  }
};
