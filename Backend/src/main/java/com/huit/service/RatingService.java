package com.huit.service;

import java.util.List;

import com.huit.exception.ProductException;
import com.huit.model.Rating;
import com.huit.model.User;
import com.huit.request.RatingRequest;

public interface RatingService {

	public Rating createRating(RatingRequest req, User user) throws ProductException;

	public List<Rating> getProdutsRating(Long productId);

}
