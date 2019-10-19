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
import com.hph.entity.Knowledge;
import com.hph.service.KnowledgeService;
@CrossOrigin
@Controller
@RequestMapping("/knowledge")
public class KnowledgeController {

	@Autowired
	private KnowledgeService knowledgeService;
	
	@RequestMapping(value = "/list", method = RequestMethod.GET)
	private String list(Model model,@ModelAttribute("page") Integer page , @ModelAttribute("type") Integer type) {
		List<Knowledge> list = knowledgeService.getList();
		List<Knowledge> lists = new ArrayList<Knowledge>();
		List<Knowledge> pages = new ArrayList<Knowledge>();
		int total = list.size();
		String json="";
		int a = 0;
		int b = 0;
		if(type==0) {
			a = (page-1)*16;
			b = page*16;
			if(b>list.size()) {
				b=list.size();
			}
			pages=list.subList(a, b);
			json=JSON.toJSONString(pages);
		}
		else {
			for (Knowledge knowledge : list) {
				if(type==knowledge.getType()) {
					lists.add(knowledge);
				}
			}
			a = (page-1)*16;
			b = page*16;
			if(b>lists.size()) {
				b=lists.size();
			}
			pages=lists.subList(a, b);
			json=JSON.toJSONString(pages);
		}
		model.addAttribute("list", json);
		model.addAttribute("total", total);
		// list.jsp + model = ModelAndView
		return "list";// WEB-INF/jsp/"list".jsp
	}
	
	@RequestMapping(value = "/search", method = RequestMethod.GET)
	private String search(Model model,@ModelAttribute("keyword") String keyword) {
		List<Knowledge> list = knowledgeService.searchList(keyword);
		String json=JSON.toJSONString(list);
		model.addAttribute("search", json);
		return "search";
	}
}
