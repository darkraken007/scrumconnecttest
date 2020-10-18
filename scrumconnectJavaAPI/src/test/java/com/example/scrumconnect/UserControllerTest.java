package com.example.scrumconnect;

import static org.junit.Assert.assertEquals;

import java.util.List;

import org.junit.After;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.example.scrumconnect.dal.UserDataDAL;
import com.example.scrumconnect.dal.UserRepository;
import com.example.scrumconnect.model.UserData;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = ScrumconnectApplication.class)
@SpringBootTest
@AutoConfigureMockMvc
public class UserControllerTest {

    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private UserDataDAL userDataDAL;

    @Autowired
    MongoTemplate mongoTemplate;

    @After
    public void tearDown() {
    	userDataDAL.deleteUserbyName("Zeeshan");
    }

    @Test
    public void testSaveUserData() {
        UserData user = new UserData();
        user.setUserId("1");
        user.setName("Zeeshan");
        user.setCountry("Germany");
        user.setAge(23);
        user.setSex("Male");
        assertEquals(user, userRepository.save(user));
    }

    @Test
    public void testRetrieval() {
        UserData user = new UserData();
        user.setUserId("1");
        user.setName("Zeeshan");
        user.setCountry("Germany");
        user.setAge(23);
        user.setSex("Male");
        assertEquals(user, userRepository.save(user));
        List<UserData> persistedUser = userRepository.findAll();
        assertEquals("1", persistedUser.get(0).getUserId());
        assertEquals("Zeeshan", persistedUser.get(0).getName());
        assertEquals("Germany", persistedUser.get(0).getCountry());
        assertEquals(23, persistedUser.get(0).getAge());
        assertEquals("Male", persistedUser.get(0).getSex());
        
    }
}