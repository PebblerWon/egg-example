/*
* 用于扩展app对象
*/
const BAR = Symbol('Application#bar');
module.exports = {
	/*
	* 方法扩展
	*/
  	foo(param) {
    	// this 就是 app 对象，在其中可以调用 app 上的其他方法，或访问属性
    	return param
  	},

  	get bar() {
  		if (!this[BAR]) {
  			this[BAR] = 3 + 5;
  		}
  		return this[BAR]
  	}
};