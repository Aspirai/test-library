// 编译后输出乱码的原因:
// 1. TypeScript源文件中包含中文字符
// 2. 编译配置(tsconfig.json)没有正确设置字符编码
// 3. 可能的解决方案:
//    - 在tsconfig.json中设置 "charset": "utf8"
//    - 确保源文件以UTF-8编码保存
//    - 设置编译器选项 --charset utf8

// 添加 DOM 类型声明
declare var console: Console;

type User = {
	name: string;
	age: number;
};

function isAdult(user: User): boolean {
	return user.age >= 18;
}

const justine = {
	name: 'Justine',
	age: 25,
} satisfies User;

const isJustineAdult = isAdult(justine);

console.log('你好', isJustineAdult);
