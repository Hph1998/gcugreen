package com.hph.web;

import java.io.IOException;
import java.io.Writer;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileUploadException;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

import com.hph.service.PhotoService;

@SuppressWarnings("serial")
public class PhotoController extends javax.servlet.http.HttpServlet{

	@SuppressWarnings({ "rawtypes", "unchecked" })
	protected void doPost(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {
        response.setContentType("text/html;charset=utf-8");
        /*设置响应头允许ajax跨域访问*/
        response.setHeader("Access-Control-Allow-Origin", "*");

        /* 星号表示所有的异域请求都可以接受， */
        response.setHeader("Access-Control-Allow-Methods", "GET,POST");

        try {
            DiskFileItemFactory factory = new DiskFileItemFactory();   
            ServletFileUpload upload = new ServletFileUpload(factory);   
            upload.setHeaderEncoding("UTF-8");  
            List items = upload.parseRequest(request);  
            Map params = new HashMap();   
            for(Object object:items){  
                FileItem fileItem = (FileItem) object;   
                if (fileItem.isFormField()) {   
                    params.put(fileItem.getFieldName(), fileItem.getString("utf-8"));//如果你页面编码是utf-8的   
                }  
            }
            //使用params.get获取参数值
            String file = (String) params.get("file");
            PhotoService photoService = new PhotoService();
            String result = photoService.advancedGeneral(file);
            Writer out = response.getWriter();
            out.write(result);

        } catch (FileUploadException e1) {
            e1.printStackTrace();
        }   
    }

    protected void doGet(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {
        this.doPost(request, response);
    }

}
