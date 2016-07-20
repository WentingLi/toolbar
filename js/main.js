requirejs.config({
	paths: {
		jquery: 'jquery.min'
	}
});//引入jQuery模块，为其定义别名
/**
 * function为回调函数，它有一个参数为传入的模块，这里命名为$
 */
requirejs(['jquery'],function($){
});

requirejs(['jquery','validate'],function($,validate){
	console.log(validate.isEqual(1,1));
});