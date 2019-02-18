
exports.middleware = [ 'robot' ];
exports.robot = {
	ua: [
		/Baiduspider/i,
	]
};

module.exports = {
	keys: "whn",
	news: {
		pageSize: 5,
		serverUrl: 'http://v.juhe.cn/toutiao/index',
		key: 'cc1e863e528638b4dc4c73c886e66dfd'
	},
	view: {
		defaultViewEngine: "nunjucks",
		mapping: {
			".tpl": "nunjucks",
		}
	},
}