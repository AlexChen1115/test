var request = require('request');
var cheerio = require('cheerio');
function data(callback){
  request('http://www.atmovies.com.tw/home/movie_homepage.html', function (error, response, html) {
   if (!error && response.statusCode == 200) {
     var $ = cheerio.load(html);
     $('select[name="area"] option').each(function area(){
       var url = $(this).attr('value');
       var areaarr=new Array();
       if(url.match('a')){
         areaarr.push(url+"/");
         callback(areaarr);
       }
     });
   }
 })
}
function data2(callback){
  request('http://www.atmovies.com.tw/home/movie_homepage.html', function (error, response, html) {
   if (!error && response.statusCode == 200) {
     var $ = cheerio.load(html);
     $('select[name="film_id"] option').each(function movie(){
       var url = $(this).attr('value');
       
       var moviearr=new Array();
       if(url.match('f')){ 
        moviearr.push(url+"/");
        callback(moviearr);
      }
    });
   }
 })
}
var data3={
 areaurl:data,
 movieurl:data2
}
module.exports=data3;