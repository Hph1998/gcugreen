package com.hph.dao;

import java.util.List;

import com.hph.entity.Message;

public interface MessageDao {

	List<Message> queryAll();
	
	int insertMessage(String sno,String name,String content,String time);

}
