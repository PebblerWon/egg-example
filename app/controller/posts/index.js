exports.index = ctx => {
	ctx.body = "index"
}

exports.new = ctx => {
	ctx.body = "new"
}

exports.show = ctx => {
	ctx.body = ctx.params;
}