package com.hph.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hph.dao.KnowledgeDao;
import com.hph.entity.Knowledge;
import com.hph.service.KnowledgeService;

@Service
public class KnowledgeServiceImpl implements KnowledgeService{

	@Autowired
	private KnowledgeDao knowledgeDao;

	@Override
	public List<Knowledge> getList() {
		return knowledgeDao.queryAll();
	}
	
	@Override
	public List<Knowledge> searchList(String name) {
		return knowledgeDao.searchAll(name);
	}
}
