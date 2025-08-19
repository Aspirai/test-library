// #!/usr/bin/env node
// VS Code会自动识别.js文件,用node filename.js命令执行.但是:加了Shebang后，可能会：尝试直接执行文件（当作可执行脚本）而不是用node命令运行;

// const { createServer } = require('node:http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = createServer((req, res) => {
// 	res.statusCode = 200;
// 	res.setHeader(/*你好*/ 'Content-Type', 'text/plain');
// 	res.end('Hello World');
// });

// server.listen(port, hostname, () => {
// 	console.log(`Server running at http://${hostname}:${port}/`);
// });

// 循环测试
// outerLoop: for (let i = 0; i < 3; i++) {
// 	innerLoop: for (let j = 0; j < 3; j++) {
// 		if (i === 1 && j === 1) {
// 			break outerLoop; // 跳出外层循环
// 		}
// 		console.log(`i=${i}, j=${j}`);
// 	}
// }

// const obj = { import: 'value' };
// class C {
// 	#import = ' value';
// }

// let a = 1e3;
// console.log(a); // 1000

// 代码点转换为字符串
function codePointToString(codePoint) {
	if (codePoint < 0 || codePoint > 0x10ffff) {
		throw new RangeError('Invalid code point');
	}
	if (codePoint <= 0xffff) {
		return String.fromCharCode(codePoint);
	}
	codePoint -= 0x10000;
	const high = 0xd800 | (codePoint >> 10);
	const low = 0xdc00 | (codePoint & 0x3ff);
	return String.fromCharCode(high, low);
}

console.log(codePointToString(0x732b)); // "猫"
console.log(codePointToString(0x1f638)); // "😸"

let a = /ab+c/i;
