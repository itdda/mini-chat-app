package com.yoonjin.minichat.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ChatController {

    @GetMapping("/hello")
    public String hello() {
        return "Hello, MiniChat!";
    }
}