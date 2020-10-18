
package com.example.scrumconnect.dal;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.scrumconnect.model.UserData;



@Repository
public interface UserRepository extends MongoRepository<UserData, String> {
}
