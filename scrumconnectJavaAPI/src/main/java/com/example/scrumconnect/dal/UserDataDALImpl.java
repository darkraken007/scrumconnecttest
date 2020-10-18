package com.example.scrumconnect.dal;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import com.example.scrumconnect.model.UserData;
import com.mongodb.client.result.DeleteResult;


@Repository
public class UserDataDALImpl implements UserDataDAL {

	@Autowired
	private MongoTemplate mongoTemplate;

	@Override
	public List<UserData> getAllUsers() {
		return mongoTemplate.findAll(UserData.class);
	}

	@Override
	public UserData getUserById(String userId) {
		Query query = new Query();
		query.addCriteria(Criteria.where("userId").is(userId));
		return mongoTemplate.findOne(query, UserData.class);
	}

	@Override
	public UserData addNewUser(UserData user) {
		mongoTemplate.save(user);
		return user;
	}

	@Override
	public Object getUserByName(String name) {
		Query query = new Query();
		query.addCriteria(Criteria.where("name").is(name));
		return mongoTemplate.findOne(query, UserData.class);
	}

	@Override
	public DeleteResult deleteUserbyName(String name) {
		Query query = new Query();
		query.addCriteria(Criteria.where("name").is(name));
		return mongoTemplate.remove(query, UserData.class);
		
	}


}
