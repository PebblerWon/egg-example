module.exports = app => {
	const {router, controller} = app;
	router.get("/", controller.home.index);
	router.get('/news', controller.news.list);
	router.get('/test', controller.test.test);
	router.get('/name', controller.sub.name.name);

	/*
	* RESTFUL风格路由
	*/
	router.resources('posts', '/api/posts', controller.posts.index);

	/*
	* redirect
	*/
	router.redirect('/redirect', '/')
}