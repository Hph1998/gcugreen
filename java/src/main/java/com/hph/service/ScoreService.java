package com.hph.service;

import java.util.List;

import com.hph.entity.Score;

public interface ScoreService {
	
	List<Score> getList();
	List<Score> getListMy(String sno);
	int insertScore(String sno,String name,String score);

}
