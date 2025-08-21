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
// function codePointToString(codePoint) {
// 	if (codePoint < 0 || codePoint > 0x10ffff) {
// 		throw new RangeError('Invalid code point');
// 	}
// 	if (codePoint <= 0xffff) {
// 		return String.fromCharCode(codePoint);
// 	}
// 	codePoint -= 0x10000;
// 	const high = 0xd800 | (codePoint >> 10);
// 	const low = 0xdc00 | (codePoint & 0x3ff);
// 	return String.fromCharCode(high, low);
// }

// console.log(codePointToString(0x732b)); // "猫"
// console.log(codePointToString(0x1f638)); // "😸"

// 1. super 在类继承中的基本用法
// class Animal {
// 	constructor(name, age) {
// 		this.name = name;
// 		this.age = age;
// 		console.log(`动物 ${name} 被创建了`);
// 	}

// 	makeSound() {
// 		return `${this.name} 发出了声音`;
// 	}

// 	getInfo() {
// 		return `名字: ${this.name}, 年龄: ${this.age}`;
// 	}
// }

// class Dog extends Animal {
// 	constructor(name, age, breed) {
// 		// super() 调用父类构造函数
// 		super(name, age); // 必须在使用 this 之前调用
// 		this.breed = breed;
// 		console.log(`狗狗 ${name} (品种: ${breed}) 被创建了`);
// 	}

// 	makeSound() {
// 		// super.methodName() 调用父类方法
// 		const parentSound = super.makeSound();
// 		return `${parentSound} - 汪汪汪！`;
// 	}

// 	getFullInfo() {
// 		// 使用 super 访问父类方法
// 		const basicInfo = super.getInfo();
// 		return `${basicInfo}, 品种: ${this.breed}`;
// 	}
// }
// // 2. 创建实例并测试
// console.log('\n=== 测试 super 在构造函数中的使用 ===');
// const myDog = new Dog('旺财', 3, '金毛');

// console.log('\n=== 测试 super 在方法中的使用 ===');
// console.log(myDog.makeSound());
// console.log( myDog.getFullInfo() );

// class GrandParent {
// 	greet() {
// 		return 'Hello from GrandParent';
// 	}
// }

// class Parent2 extends GrandParent {
// 	greet() {
// 		const grandParentGreeting = super.greet();
// 		return `${grandParentGreeting} -> Hello from Parent`;
// 	}
// }

// class Child2 extends Parent2 {
// 	greet() {
// 		const parentGreeting = super.greet();
// 		return `${parentGreeting} -> Hello from Child`;
// 	}
// }

// console.log('\n=== 多层继承中的 super ===');
// const child2 = new Child2();
// console.log(child2.greet());

// const str = 'Hello';
// const arr = [1, 2];
// console.log(str instanceof String);
// console.log(typeof str);
// console.log(arr instanceof Array);
// console.log(typeof arr);
// console.log( Array.isArray( arr ) );
// console.log(typeof null)

// function* littleCats() {
// 	yield '小白猫';
// 	yield '小黑猫';
// }

// function* bigFamily() {
// 	yield '妈妈猫';
// 	yield* littleCats();
// 	yield '爸爸猫';
// }

// const cat = bigFamily();
// console.log(cat.next());
// console.log(cat.next());
// console.log(bigFamily().next());
// console.log(bigFamily().next());

// for (let c of cat) {
// 	console.log(c);
// }

// console.log(cat.next().value);

// const cats = new Set(['小花', '小白', '小黑']);
// const dogs = new Set(['小白', '小黄', '小黑']);

// 交集 (两个集合共同拥有的)
// const intersection = [...cats].filter(x => dogs.has(x));
// console.log([...intersection]); // ['小白', '小黑']
// console.log([...cats,...dogs])

const catInfo = new Map();

catInfo.set('小花', { age: 2, color: '橘色' });

console.log(catInfo);
console.log(catInfo.get('小花'));

const mapCats = new Map();
const objCats = { breed: '波斯猫' };
mapCats.set(objCats, '这是波斯猫信息');
console.log(mapCats.get(objCats));

