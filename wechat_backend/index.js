"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// server.ts
const ws_1 = require("ws");
// 创建 WebSocket 服务器实例，监听指定端口
const wss = new ws_1.WebSocketServer({ port: 8080 });
// 监听连接事件
wss.on('connection', (ws) => {
    console.log('客户端已连接');
    // 监听消息事件
    ws.on('message', (message) => {
        console.log('收到消息:', message);
        // 发送回消息给客户端
        ws.send(`服务端已收到消息: ${message}`);
    });
    // 监听连接关闭事件
    ws.on('close', () => {
        console.log('客户端已断开连接');
    });
    // 监听错误事件
    ws.on('error', (error) => {
        console.error('WebSocket错误:', error);
    });
    // 给客户端发送初始消息
    ws.send('欢迎连接到 WebSocket 服务端');
});
console.log('WebSocket 服务器启动，监听端口 8080');
