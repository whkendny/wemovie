'use strict'

var Koa = require('koa');
var path = require('path');
var wechat = require('./wechat/generator');
var util = require('./libs/util');

var wechat_file = path.join(__dirname,'./config/wechat.txt');

var config = {
	wechat:{
		appID:'wx33eb6a0510f98a3f',
		appSecret:'d4624c36b6795d1d99dcf0547af5443d',
		token:'wemovie',
		getAccessToken:function(){
			return util.readFileAsync(wechat_file);
		},
		saveAccessToken:function(data){
			return util.writeFileAsync(wechat_file,data);
		},
	}
};

var app = new Koa();

app.use(wechat(config.wechat));

app.listen(8080);

console.log('Listening 8080...')