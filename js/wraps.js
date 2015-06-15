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
function getParamByName(name) { //http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}