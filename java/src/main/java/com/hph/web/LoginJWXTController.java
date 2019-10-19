package com.hph.web;

import java.io.IOException;
import java.io.Writer;

import org.jsoup.nodes.Document;

import com.hph.service.ConnectJWGL;
import com.hph.service.VCodeOCR;

@SuppressWarnings("serial")
public class LoginJWXTController extends javax.servlet.http.HttpServlet{

	private Document document;
	
	protected void doPost(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {
        response.setContentType("text/html;charset=utf-8");
        /*设置响应头允许ajax跨域访问*/
        response.setHeader("Access-Control-Allow-Origin", "*");

        /* 星号表示所有的异域请求都可以接受， */
        response.setHeader("Access-Control-Allow-Methods", "GET,POST");

        //获取微信小程序get的参数值并打印
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        ConnectJWGL connectJWGL = new ConnectJWGL();
        connectJWGL.downloadCheckcode();
        String vcode = "";
        try {
            vcode = VCodeOCR.ocr("D:\\桌面\\checkcode.gif");
        } catch (Exception e) {
            e.printStackTrace();
        }
        if(connectJWGL.login(username,password,vcode)){
            document = connectJWGL.getStudentInformation();
            String name=document.getElementById("xm").text();
            String sno =document.getElementById("xh").text();
            String xzb=document.getElementById("lbl_xzb").text();
            //返回值给网页
            Writer out = response.getWriter();
            out.write("{ \"data\": [{\"name\":\""+name+"\",\"sno\":"+sno+",\"xzb\":\""+xzb+"\"}] }");
            out.flush();
        }
        else {
        	Writer out = response.getWriter();
            out.write("绑定失败，请重试");
            out.flush();
        }
    }

    protected void doGet(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {
        this.doPost(request, response);
    }

}
