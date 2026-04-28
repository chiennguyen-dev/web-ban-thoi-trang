package com.huit.service;

import com.huit.exception.UserException;
import com.huit.model.User;

public interface UserService {

	public User findUserById(long userId) throws UserException;

	public User findUserProfileByJwt(String jwt) throws UserException;
}
