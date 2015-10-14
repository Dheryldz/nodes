var kclass=require('./kclass');

exports.addV=function (klasses) {
	klasses.forEach(function (item,index) {
		var _klass=item;
		var tearcherName=item.tearcherName;
		var students=item.students;
		console.log(item);
		kclass.addv(tearcherName,students);
	});
}
kclass.add('Scott',['王芳草','忽赢慧']);