package com.example.scrumconnect.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.scrumconnect.dal.UserDataDAL;
import com.example.scrumconnect.dal.UserRepository;
import com.example.scrumconnect.model.UserData;
import com.mongodb.client.result.DeleteResult;



@RestController
@RequestMapping(value = "/")
public class UserController {

	private final Logger LOG = LoggerFactory.getLogger(getClass());

	private final UserRepository userRepository;

	private final UserDataDAL userDAL;

	public UserController(UserRepository userRepository, UserDataDAL userDAL) {
		this.userRepository = userRepository;
		this.userDAL = userDAL;
	}

	@RequestMapping(value = "/create", method = RequestMethod.POST)
	public UserData addNewUsers(@RequestBody UserData user) {
		LOG.info("Saving user.");
		return userRepository.save(user);
	}
	
	@RequestMapping(value = "/delete", method = RequestMethod.POST)
	public DeleteResult deleteUser(@RequestBody UserData user) {
		LOG.info("Deleting user.");
		return userDAL.deleteUserbyName(user.getName());
	}

	@RequestMapping(value = "", method = RequestMethod.GET)
	public List<UserData> getAllUsers() {
		LOG.info("Getting all users.");
		return userRepository.findAll();
	}

	@RequestMapping(value = "/{userId}", method = RequestMethod.GET)
	public UserData getUser(@PathVariable String userId) {
		LOG.info("Getting user with ID: {}.", userId);
		return userDAL.getUserById(userId);
	}

}