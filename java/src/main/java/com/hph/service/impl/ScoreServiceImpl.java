package com.hph.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hph.dao.ScoreDao;
import com.hph.entity.Score;
import com.hph.service.ScoreService;

@Service
public class ScoreServiceImpl implements ScoreService {

	@Autowired
	private ScoreDao scoreDao;
	
	@Override
	public List<Score> getList(){
		return scoreDao.queryAll();
	}
	
	@Override
	public List<Score> getListMy(String sno){
		return scoreDao.queryMy(sno);
	}
	
	@Override
	public int insertScore(String sno,String name, String score) {
		return scoreDao.insertScore(sno,name,score);
	}

}
