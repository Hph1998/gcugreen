package com.hph.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hph.dao.MessageDao;
import com.hph.entity.Message;
import com.hph.service.MessageService;

@Service
public class MessageServiceImpl implements MessageService{

	@Autowired
	private MessageDao messageDao;
	
	@Override
	public List<Message> getList(){
		return messageDao.queryAll();
	}
	
	@Override
	public int insertMessage(String sno,String name, String content,String time) {
		return messageDao.insertMessage(sno,name,content,time);
	}

}
