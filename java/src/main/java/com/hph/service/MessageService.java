package com.hph.service;

import java.util.List;

import com.hph.entity.Message;

public interface MessageService {

	List<Message> getList();
	
	int insertMessage(String sno,String name,String content,String time);

}
