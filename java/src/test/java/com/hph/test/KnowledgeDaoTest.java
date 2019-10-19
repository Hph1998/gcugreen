package com.hph.test;

import java.util.List;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import com.hph.BaseTest;
import com.hph.dao.KnowledgeDao;
import com.hph.entity.Knowledge;

public class KnowledgeDaoTest extends BaseTest{

	@Autowired
	private KnowledgeDao knowledgeDao;
	
	@Test
	public void testQueryAll() throws Exception {
		List<Knowledge> knowledges = knowledgeDao.queryAll();
		for (Knowledge knowledge : knowledges) {
			System.out.println(knowledge);
		}
	}
}
