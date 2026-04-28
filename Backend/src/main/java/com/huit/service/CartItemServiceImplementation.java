package com.huit.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.huit.exception.CartItemException;
import com.huit.exception.UserException;
import com.huit.model.Cart;
import com.huit.model.CartItem;
import com.huit.model.Product;
import com.huit.model.User;
import com.huit.repository.CartItemRepository;
import com.huit.repository.CartRepository;

@Service
public class CartItemServiceImplementation implements CartItemService {

	private CartItemRepository cartItemRepository;
	private UserService userService;
	private CartRepository cartRepository;

	public CartItemServiceImplementation(CartItemRepository cartItemRepository, UserService userService,
			CartRepository cartRepository) {
		this.cartItemRepository = cartItemRepository;
		this.userService = userService;
		this.cartRepository = cartRepository;
	}

	@Override
	public CartItem createCartItem(CartItem cartItem) {
		cartItem.setQuantity(1);
		cartItem.setPrice(cartItem.getProduct().getPrice() * cartItem.getQuantity());
		cartItem.setDiscountedPrice(cartItem.getProduct().getDiscountedPrice() * cartItem.getQuantity());

		CartItem createdCartItem = cartItemRepository.save(cartItem);

		return createdCartItem;

	}

	@Override
	public CartItem updateCartItem(Long userId, Long id, CartItem cartItem) throws CartItemException, UserException {
		CartItem item = findCartItemById(id);
		User user = userService.findUserById(item.getUserId());

		if (user.getId().equals(userId)) {
			item.setQuantity(cartItem.getQuantity());
			item.setPrice(item.getQuantity() * item.getProduct().getPrice());
			item.setDiscountedPrice(item.getProduct().getDiscountedPrice() * item.getQuantity());
		}

		return cartItemRepository.save(item);

	}

	@Override
	public CartItem isCartItemExist(Cart cart, Product product, String size, Long userId) {
		CartItem cartItem = cartItemRepository.isCartItemExist(cart, product, size, userId);
		return cartItem;

	}

	@Override
	public void removeCartItem(Long userId, Long cartItemId) throws CartItemException, UserException {
		CartItem cartItem = findCartItemById(cartItemId);

		// Debug: In ra để kiểm tra thực tế trong console
		System.out.println("ID người dùng từ JWT: " + userId);
		System.out.println("ID chủ sở hữu trong DB: " + cartItem.getUserId());

		// So sánh trực tiếp ID, không cần findUserById cho tốn tài nguyên
		if (cartItem.getUserId().equals(userId)) {
			cartItemRepository.deleteById(cartItemId);
		} else {
			// Bạn nên ném ra CartItemException hoặc một Custom Exception phù hợp hơn
			throw new UserException("you can't remove another user's item");
		}
	}

	@Override
	public CartItem findCartItemById(Long cartItemId) throws CartItemException {
		Optional<CartItem> opt = cartItemRepository.findById(cartItemId);

		if (opt.isPresent()) {
			return opt.get();
		}

		throw new CartItemException("cartItem not found with id : " + cartItemId);

	}

}
