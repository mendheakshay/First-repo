//Normal function
setTimeout(function() {
  console.log("I am a Normal set timeout function");
}, 1000);

//Normal function with name identifier
const test = function(){
  console.log("I am a Normal test function");
}
test();

//Arrow function
setTimeout(() => {
  console.log("I am a Arrow Set timeout function");
}, 1000);

//Arrow function with name identifier
const testArrow = () => {
  console.log("I am a Arrow test function");
}
testArrow();
