const Controller = require('egg').Controller;

class TestController extends Controller {
	async test() {

		const {serverUrl, pageSize, key} = this.config.news;
		const a = await this.ctx.curl(`${serverUrl}`, {
			data: {
				type: 'top',
				pagesize: pageSize,
				key: `${key}`
			},
			dataType: 'json',
		})
		
		this.ctx.body = this.ctx.helper.test();
	}
}

module.exports = TestController;