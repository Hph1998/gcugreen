package com.hph.service;

import java.util.List;
import com.hph.entity.Knowledge;

public interface KnowledgeService {

	List<Knowledge> getList();
	
	List<Knowledge> searchList(String name);

}
