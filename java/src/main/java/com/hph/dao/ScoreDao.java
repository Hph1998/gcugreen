package com.hph.dao;

import java.util.List;

import com.hph.entity.Score;

public interface ScoreDao {
	
	List<Score> queryAll();
	List<Score> queryMy(String sno);
	int insertScore(String sno,String name,String score);

}
