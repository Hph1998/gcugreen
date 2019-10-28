package com.hph.web;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.alibaba.fastjson.JSON;
import com.hph.entity.Score;
import com.hph.service.ScoreService;

@CrossOrigin
@Controller
@RequestMapping("/score")
public class ScoreController {

	@Autowired
	private ScoreService scoreService;
	@RequestMapping(value = "/list", method = RequestMethod.GET)
	private String list(Model model,@ModelAttribute("sno") String sno) {
		List<Score> list = new ArrayList<>();
		if(sno.equals("666")) {
			list = scoreService.getList();
		}
		else {
			list = scoreService.getListMy(sno);
		}
		String json=JSON.toJSONString(list);
		int total=10;
		model.addAttribute("list", json);
		model.addAttribute("total", total);
		return "list";
	}
	@RequestMapping(value = "/insert", method = RequestMethod.GET)
	private String insert(Model model,@ModelAttribute("sno") String sno , @ModelAttribute("name") String name, @ModelAttribute("score") String score) {
		int result = scoreService.insertScore(sno,name,score);
		model.addAttribute("result", result);
		return "insert";
	}

}
