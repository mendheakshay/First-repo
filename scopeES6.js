this.a = 25;
// Normal function 
const print = function() {
	this.a = 50;
	console.log("this.a", this.a);
}

//Arrow function
const printArrow = () => {
	console.log("this.a", this.a);
}
