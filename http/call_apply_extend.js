function Pet(words,names){
	this.words=words;
	this.names=names;
	this.speak=function(){
		console.log(this.words+' '+this.names);
	}
}

function Dog(words,names){
	//Pet.call(this,words,names);
	Pet.apply(this,[words,names]);
}

var dog=new Dog('Wang','gougou');

dog.speak();