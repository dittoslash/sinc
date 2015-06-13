function getElById(id) {
	// Get element by id
	return document.getElementById(id);
};
function txtBox(msg) {
	// *woof*
	getElById("textbox").innerHTML = msg;
	return getElById("textbox");
};
function updateMoney() {
	getElById("money").innerHTML = Math.floor(money); //rounded to prevent display of lots of dec places
	return money
};