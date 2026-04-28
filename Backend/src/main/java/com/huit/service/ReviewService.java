package com.huit.service;

import java.util.List;

import com.huit.exception.ProductException;
import com.huit.model.Review;
import com.huit.model.User;
import com.huit.request.ReviewRequest;

public interface ReviewService {

	public Review createReive(ReviewRequest req, User user) throws ProductException;

	public List<Review> getAllReview(Long productId);

}
