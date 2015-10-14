/**
 * 同步
 */
// var i=0;
// while(true){
// 	i++;
// }

/**
 * [c 异步]
 * @type {Number}
 */
var c=0;
function printIt(){
	console.log(c);
}
function plus(callback){
	setTimeout(function(){
		c+=1;
		callback(c);
	},1000);
}

plus(printIt);
