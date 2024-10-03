## 搭建WebSocket测试

在 TypeScript 中实现 WebSocket 后端服务，你可以使用 Node.js 和 `ws` 库（WebSocket 的流行实现）。下面是一个简单的例子，展示如何在 TypeScript 环境下创建 WebSocket 后端服务。

### 1. **安装依赖**
首先，你需要安装必要的依赖项：

```npm init -y```用于快速初始化一个新的 Node.js 项目的命令。它会自动生成一个默认的 `package.json` 文件，而不需要你手动回答一系列的问题。具体来说，它会使用默认值来填充 `package.json` 文件中的各个字段。

```bash
npm init -y
npm install typescript ws @types/ws
or
yarn add ts-node typescript
yarn add ws
yarn add @types/ws --dev
```

然后，初始化 TypeScript 配置：

`npx tsc --init` 是一个用于初始化 TypeScript 项目的命令。它会在你的项目根目录中生成一个默认的 `tsconfig.json` 文件，该文件包含 TypeScript 编译器的配置选项。

```bash
npx tsc --init
```

#### 1.配合 `nodemon` 自动重启（可选）

如果你想在开发过程中自动重启文件，结合 `nodemon` 和 `yarn` 使用：

#### 2.安装 `nodemon`:

```bash
yarn add nodemon
```

#### 3.执行带有自动重启的 `.ts` 文件：
```bash
yarn nodemon --exec ts-node your-file.ts
```

#### 4.清理和重建项目

```bash
rm -rf node_modules package-lock.json
npm install
```



### 2. **创建 WebSocket 服务**

在你的 TypeScript 项目中，创建一个文件，如 `server.ts`，并实现 WebSocket 服务。以下是示例代码：

```typescript
// server.ts
import WebSocket, { WebSocketServer } from 'ws';

// 创建 WebSocket 服务器实例，监听指定端口
const wss = new WebSocketServer({ port: 8080 });

// 监听连接事件
wss.on('connection', (ws: WebSocket) => {
    console.log('客户端已连接');

    // 监听消息事件
    ws.on('message', (message: string) => {
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
```

### 3. **编译并运行服务**
编译 TypeScript 文件：

```bash
npx tsc
```

然后运行生成的 JavaScript 文件：

```bash
node dist/server.js
```

WebSocket 服务器将启动，并监听 `8080` 端口。

### 4. **客户端连接测试**

你可以使用浏览器或其他工具测试 WebSocket 服务。以下是一个简单的前端 WebSocket 客户端代码：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WebSocket Client</title>
</head>
<body>
    <h1>WebSocket 测试</h1>
    <script>
        const socket = new WebSocket('ws://localhost:8080');

        socket.onopen = () => {
            console.log('连接已打开');
            socket.send('你好，服务端');
        };

        socket.onmessage = (event) => {
            console.log('收到消息:', event.data);
        };

        socket.onclose = () => {
            console.log('连接已关闭');
        };

        socket.onerror = (error) => {
            console.error('WebSocket 错误:', error);
        };

        const test = () => {
            // console.log('发送消息');
            socket.send('你好，服务端');
        }

    </script>
    <button onclick="test()">发送</button>
</body>
</html>
```

### 5. **项目结构**
你的项目结构可能如下所示：

```
/my-websocket-server
│
├── /dist (编译后生成的文件)
│
├── /node_modules
│
├── /src
│   └── server.ts (WebSocket 服务代码)
│
├── tsconfig.json (TypeScript 配置文件)
├── package.json (项目配置和依赖)
└── package-lock.json
```

### 总结：
1. 安装 `ws` 库并在 TypeScript 中使用它。
2. 使用 `WebSocketServer` 创建一个 WebSocket 服务。
3. 监听客户端连接、消息传递和断开连接事件。
4. 使用浏览器或客户端工具与服务端通信。