"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// server.ts
var ws_1 = require("ws");
// 创建 WebSocket 服务器实例，监听指定端口
var wss = new ws_1.WebSocketServer({ port: 8080 });
// 监听连接事件
wss.on('connection', function (ws) {
    console.log('客户端已连接');
    // 监听消息事件
    ws.on('message', function (message) {
        console.log('收到消息:', message);
        // 发送回消息给客户端
        ws.send("\u670D\u52A1\u7AEF\u5DF2\u6536\u5230\u6D88\u606F: ".concat(message));
    });
    // 监听连接关闭事件
    ws.on('close', function () {
        console.log('客户端已断开连接');
    });
    // 监听错误事件
    ws.on('error', function (error) {
        console.error('WebSocket错误:', error);
    });
    // 给客户端发送初始消息
    ws.send('欢迎连接到 WebSocket 服务端');
});
console.log('WebSocket 服务器启动，监听端口 8080');
