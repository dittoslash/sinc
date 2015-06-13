var money = 0
var moneyperclick = 1
var mpms = 0
var hasPermit = false
window.onload = function () { //Loading script
txtBox("Page Loaded, starting Sinc");
window.setInterval(tick, 10);
$(".permithide").hide();
txtBox("Sinc Loaded");
}
function pressButton() {
	money = money + moneyperclick;
	updateMoney();
}
function tick() {
	money = money + mpms
	updateMoney();
}
function buyWorker(i) {
	if (money > ((i * 100) - 1)) {
		money = money - (i * 100);
		addIncome(i / (11 - i));
		txtBox("Bought worker");
	} else {
		txtBox("Couldn't afford");
	}
}
function addIncome(i) {
	mpms = mpms + i
}
function buyPermit() {
	if (money > (500) - 1) {
		hasPermit = true
		$(".permithide").show();
		$("#workerpermit").hide();
		txtBox("Bought permit")
	} else {
		txtBox("Couldn't afford");
	}
}