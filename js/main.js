var money = 0
var moneyperclick = 1
var mpms = 0
window.onload = function () { //Loading script
txtBox("Page Loaded, starting Sinc");
window.setInterval(tick, 10);
txtBox("Sinc Loaded");
}
function pressButton() {
	money = money + moneyperclick;
	updateMoney();
}
function tick() {
	money = money + mpms
	updateMoney()
}