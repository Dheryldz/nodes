var EventEmitter = require('events').EventEmitter;

var life = new EventEmitter();

life.setMaxListeners(11);//如果没有写这个方法，事件只可以监控10个，如果超过了10个，就写这个方法
function water(who){
	console.log('给 ' + who + ' 倒水');
}
//addEventListener
life.on('求安慰', water);
life.on('求安慰', function(who) {
    console.log('给 ' + who + ' 揉肩膀');
});
life.on('求安慰', function(who) {
    console.log('给 ' + who + ' 洗衣服');
});
life.on('求安慰', function(who) {
    console.log('给 ' + who + ' 做饭');
});
life.on('求安慰', function(who) {
    console.log('给 ' + who + ' ...5');
});
life.on('求安慰', function(who) {
    console.log('给 ' + who + ' ...6');
});
life.on('求安慰', function(who) {
    console.log('给 ' + who + ' ...7');
});
life.on('求安慰', function(who) {
    console.log('给 ' + who + ' ...8');
});
life.on('求安慰', function(who) {
    console.log('给 ' + who + ' ...9');
});
life.on('求安慰', function(who) {
    console.log('给 ' + who + ' ...10');
});
life.on('求安慰', function(who) {
    console.log('给 ' + who + ' 你想累死我啊');
});



life.on('求溺爱', function(who) {
    console.log('给 ' + who + ' 买衣服');
});
life.on('求溺爱', function(who) {
    console.log('给 ' + who + ' 交工资');
});


life.removeListener('求安慰', water);//移出指定的事件
//life.removeAllListeners();//移除所有事件
life.removeAllListeners('求安慰');//移除某类事件

var hasConfortListener=life.emit('求安慰', '汉子');
var hasLovedListener=life.emit('求溺爱', '妹子');



console.log(life.listeners('求安慰').length);

console.log(life.listeners().length);

console.log(EventEmitter.listenerCount(life,'求溺爱'));



// var hasPlayedListener=life.emit('求玩坏', '妹子和汉子');


// console.log(hasConfortListener);
// console.log(hasLovedListener);
// console.log(hasPlayedListener);
