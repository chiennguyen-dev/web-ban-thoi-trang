package com.huit.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.huit.exception.OrderException;
import com.huit.exception.UserException;
import com.huit.model.Address;
import com.huit.model.Order;
import com.huit.model.User;
import com.huit.service.OrderService;
import com.huit.service.UserService;

@RestController
@RequestMapping("/api/orders")
public class OrderContoller {

	@Autowired
	private OrderService orderService;

	@Autowired
	private UserService userService;

	@PostMapping("/")
	public ResponseEntity<Order> createOrder(@RequestBody Address shippingAddress,
			@RequestHeader("Authorization") String jwt) throws UserException, OrderException {
		User user = userService.findUserProfileByJwt(jwt);
		Order createdOrder = orderService.createOrder(user, shippingAddress);
		return new ResponseEntity<>(createdOrder, HttpStatus.CREATED);
	}

	@GetMapping("/{id}")
	public ResponseEntity<Order> findOrderById(@PathVariable("id") Long orderId,
			@RequestHeader("Authorization") String jwt) throws UserException, OrderException {
		User user = userService.findUserProfileByJwt(jwt);
		Order order = orderService.findOrderById(orderId);

		System.out.println("order" + order);

		return new ResponseEntity<>(order, HttpStatus.CREATED);
	}

	@GetMapping("/user")
	public ResponseEntity<List<Order>> usersOrderHistoryHandler(@RequestHeader("Authorization") String jwt)
			throws UserException {
		// Lấy thông tin user từ JWT
		User user = userService.findUserProfileByJwt(jwt);

		// Gọi Service để lấy danh sách đơn hàng của user đó
		List<Order> orders = orderService.usersOrderHistory(user.getId());

		return new ResponseEntity<>(orders, HttpStatus.OK);
	}

}


