var data=require('./crew');
var request = require('request');
var cheerio = require('cheerio');
​
data.areaurl(function(areaarr){
	data.movieurl(function(moviearr){
		var dataurl=(moviearr+areaarr);
		var url='http:www.atmovies.com.tw/showtime/'+dataurl;
		request(url, function (error, response, body) {    
			console.log(url);
			console.log(error);
			if(!error){
				$ = cheerio.load(body);
				var alldata = $('#header').text();  
				console.log("123");
			}
			else
			{
				console.log("fail");
			}
		})  
	}); 
});
​
// request("http://www.atmovies.com.tw/showtime/ften46387976/a03/", function (error, response, body) {
//        // console.log(movieurl);
//        if(!error){
//        	$ = cheerio.load(body);
//        	var alldata = $('#header').text();  
//        	console.log(alldata);
​
//        }
//    })  