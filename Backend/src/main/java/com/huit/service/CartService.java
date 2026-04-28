package com.huit.service;

import com.huit.exception.ProductException;
import com.huit.model.Cart;
import com.huit.model.User;
import com.huit.request.AddItemRequest;

public interface CartService {

	public Cart createCart(User user);
	
	public String addCartItem(Long userId, AddItemRequest req) throws ProductException;
	
	public Cart findUserCart(Long userId);
	
}
