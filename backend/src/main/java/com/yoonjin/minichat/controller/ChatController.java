package com.yoonjin.minichat.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "${frontend.url}")
public class ChatController {

    @GetMapping("/hello")
    public String hello() {
        return "Hello, MiniChat!";
    }
}