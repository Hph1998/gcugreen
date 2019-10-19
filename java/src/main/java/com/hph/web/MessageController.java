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
import com.hph.entity.Message;
import com.hph.service.MessageService;

@CrossOrigin
@Controller
@RequestMapping("/message")
public class MessageController {

	@Autowired
	private MessageService messageService;
	@RequestMapping(value = "/list", method = RequestMethod.GET)
	private String list(Model model,@ModelAttribute("page") Integer page) {
		List<Message> list = messageService.getList();
		List<Message> pages = new ArrayList<Message>();
		int total = list.size();
		int a = 0;
		int b = 0;
		a = (page-1)*16;
		b = page*16;
		if(b>list.size()) {
			b=list.size();
		}
		pages=list.subList(a, b);
		String json=JSON.toJSONString(pages);
		model.addAttribute("list", json);
		model.addAttribute("total", total);
		return "list";
	}
	@RequestMapping(value = "/insert", method = RequestMethod.GET)
	private String insert(Model model,@ModelAttribute("sno") String sno , @ModelAttribute("name") String name, @ModelAttribute("content") String content) {
		int result = messageService.insertMessage(sno,name,content);
		model.addAttribute("result", result);
		return "insert";
	}

}
