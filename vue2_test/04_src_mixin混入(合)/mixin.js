export const showName = {
	methods: {
		showName() {
			alert(this.name);
		},
	},
	mounted() {
		console.log('你好啊');
	},
};

export const mixinData = {
	data() {
		return {
			x: 1,
			y: 2,
		};
	},
};
