const Service = require('egg').Service;

class NewsService extends Service {
	async list(page = 1) {
		const {serverUrl, pageSize } = this.config.news;
		let time = Date.now().toString().substring(0, 10);
		const {data: returnData } = await this.ctx.curl(`${serverUrl}`, {
			data: {
				type: 'top',
				key: `${this.config.news.key}`
			},
			dataType: 'json',
		})

		if (returnData && returnData.reason === "成功的返回") {
			return returnData.result.data;
		} else {
			return [];
		}
		
	}
}

module.exports = NewsService;