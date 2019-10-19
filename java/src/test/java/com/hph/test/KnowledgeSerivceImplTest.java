package com.hph.test;

import java.util.List;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import com.hph.BaseTest;
import com.hph.entity.Knowledge;
import com.hph.service.KnowledgeService;

public class KnowledgeSerivceImplTest extends BaseTest{

	@Autowired
	private KnowledgeService knowledgeService;
	
	@Test
	public void testQueryAll() throws Exception {
		List<Knowledge> knowledges = knowledgeService.getList();
		for (Knowledge knowledge : knowledges) {
			System.out.println(knowledge);
		}
	}

}
