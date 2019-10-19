package com.hph.dao;

import java.util.List;

import com.hph.entity.Knowledge;

public interface KnowledgeDao {
	
	List<Knowledge> queryAll();
	
	List<Knowledge> searchAll(String name);
	
}