package com.zhagl.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

/**
 * Created by ZhaGuolong on 2018/2/28.
 */

@RestController
@RequestMapping("/springboot")
public class HelloWorldController {
    //测试springboot项目是否调通，页面输入http://localhost:8080/springboot/say?name=123
    @RequestMapping(value = "/say", method = RequestMethod.GET)
    public String sayWorld(String name) {
        return "Hello " + name;
    }

    /**
     * 测试加载html，页面输入http://localhost:8080/springboot/hi
     * hello.html里开始学习vue.js之旅
     * */
    @RequestMapping(value = "/hi", method = RequestMethod.GET)
    public ModelAndView hello() {
        ModelAndView viewResult = new ModelAndView();
        viewResult.setViewName("hello");
        return viewResult;
    }
}