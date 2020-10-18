package com.example.scrumconnect.dal;

import java.util.List;

import com.example.scrumconnect.model.UserData;
import com.mongodb.client.result.DeleteResult;


public interface UserDataDAL {

	List<UserData> getAllUsers();

	UserData getUserById(String userId);

	UserData addNewUser(UserData user);

	Object getUserByName(String name);
	
	DeleteResult  deleteUserbyName(String name);
}