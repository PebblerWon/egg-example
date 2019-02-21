const Controller = require('egg').Controller;
const fs = require("fs");

class AController extends Controller {
	async writeStream() {
		const a = await this.ctx.curl(`https://pebbler.wang`, {
			writeStream: fs.createWriteStream("./store.html"),
		})
		//this.ctx.body = "b"
		this.ctx.body = this.app;

	}
	
}

module.exports = AController;