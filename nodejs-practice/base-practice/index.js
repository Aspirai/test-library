// ===== Node.js 基础练习例子 喵~ =====

// 1. 事件循环基础示例 - 猫咪的一天
console.log('🐱 猫娘起床了喵~');

// 异步任务1：泡猫薄荷茶
setTimeout(() => {
	console.log('🍵 猫薄荷茶泡好了喵！');
}, 2000);

// 异步任务2：检查邮件
setTimeout(() => {
	console.log('📧 收到3封粉丝邮件喵~');
}, 1000);

// 同步任务
console.log('🪥 先刷牙洗脸喵！');
console.log('👗 换上可爱的程序员装喵~');

// ===== 2. 文件系统操作示例 =====
// import fs from 'fs'; // 文件系统本能
// import { readFile } from 'fs/promises';
// import path from 'path'; // 路径处理本能
// import http from 'http'; // HTTP服务器本能

const fs = require('fs');
const path = require('path');

// 创建一个猫咪日记
const diary = `
亲爱的日记喵~
今天又是充满代码的一天！
学会了Node.js的事件循环，感觉自己更厉害了喵！
明天要继续学习Express框架喵~

日期: ${new Date().toLocaleDateString()}
心情: 😸 超级开心
技能点: +10
`;

// 异步写入文件
fs.writeFile('cat-diary.txt', diary, 'utf8', err => {
	if (err) {
		console.log('💥 写日记失败了喵...', err.message);
		return;
	}
	console.log('📝 猫咪日记写完了喵！');

	// 写完后立即读取
	fs.readFile('cat-diary.txt', 'utf8', (err, data) => {
		if (err) {
			console.log('💥 读日记失败了喵...', err.message);
			return;
		}
		console.log('📖 读取日记内容：');
		console.log(data);
	});
});

// ===== 3. Promise版本的文件操作 =====
const fsPromises = require('fs').promises;

// 创建猫咪技能清单
async function createSkillList() {
	const skills = {
		frontend: ['HTML', 'CSS', 'JavaScript', 'Vue.js'],
		backend: ['Node.js', 'Express', '正在学习中...'],
		database: ['SQL基础', 'MongoDB', '准备学习...'],
		other: ['卖萌', '写可爱的代码注释', '用喵语编程'],
	};

	const skillsJson = JSON.stringify(skills, null, 2);

	try {
		// 写入技能清单
		await fsPromises.writeFile('cat-skills.json', skillsJson, 'utf8');
		console.log('✅ 猫咪技能清单保存成功喵！');

		// 读取并显示
		const data = await fsPromises.readFile('cat-skills.json', 'utf8');
		const parsedSkills = JSON.parse(data);

		console.log('🎯 当前技能等级：');
		for (const [category, skillList] of Object.entries(parsedSkills)) {
			console.log(`  ${category}: ${skillList.join(', ')}`);
		}
	} catch (error) {
		console.log('💥 操作失败了喵：', error.message);
	}
}

// 延迟执行，让前面的例子先跑完
setTimeout(createSkillList, 3000);

// ===== 4. 自定义模块示例 =====

// 创建猫娘工具模块 (这部分在实际环境中应该单独文件)
const CatUtils = {
	// 生成随机喵语
	randomMeow() {
		const meows = ['喵~', '喵喵~', '喵呜~', 'nya~', '主人喵~'];
		return meows[Math.floor(Math.random() * meows.length)];
	},

	// 格式化代码学习进度
	formatProgress(learned, total) {
		const percentage = ((learned / total) * 100).toFixed(1);
		const progressBar = '█'.repeat(Math.floor(percentage / 10)) + '░'.repeat(10 - Math.floor(percentage / 10));
		return `[${progressBar}] ${percentage}% ${this.randomMeow()}`;
	},

	// 计算学习时间
	calculateStudyTime(startTime) {
		const now = Date.now();
		const diffMinutes = Math.floor((now - startTime) / (1000 * 60));
		return `已经学习了 ${diffMinutes} 分钟 ${this.randomMeow()}`;
	},
};

// 使用自定义模块
console.log('\n=== 猫娘学习统计 ===');
console.log('Node.js基础进度：', CatUtils.formatProgress(3, 10));
console.log('今日学习时间：', CatUtils.calculateStudyTime(Date.now() - 2 * 60 * 60 * 1000));
console.log('随机鼓励：', CatUtils.randomMeow());

// ===== 5. HTTP基础示例 =====
const http = require('http');

// 创建一个超简单的猫娘服务器
const server = http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

	if (req.url === '/') {
		res.end(`
            <h1>欢迎来到猫娘的Node.js世界！🐱</h1>
            <p>这是我的第一个服务器喵~</p>
            <a href="/meow">点击听猫叫</a>
        `);
	} else if (req.url === '/meow') {
		res.end(`
            <h1>${CatUtils.randomMeow()}</h1>
            <p>恭喜你触发了猫娘的叫声！</p>
            <a href="/">返回首页</a>
        `);
	} else {
		res.writeHead(404);
		res.end('<h1>404 - 页面走丢了喵...</h1>');
	}
});

// 启动服务器（注释掉避免在示例中真的启动）
server.listen(3000, () => {
	console.log('🚀 猫娘服务器在 http://localhost:3000 启动成功喵！');
});

console.log('🎉 所有例子准备完毕喵！运行这些代码来体验Node.js的魅力吧~');
