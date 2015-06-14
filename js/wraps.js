//Functions (mainly wrappers)
function txtBox(msg) {
	// *woof*
	$("#textbox").html(msg);
	return $("#textbox");
};
function updateMoney() {
	$("#money").html(Math.floor(money))//rounded to prevent display of lots of dec places
	return money
};
function mozRand(min, max) { //thanks, Mozilla
  return Math.floor(Math.random() * (max - min)) + min;
}