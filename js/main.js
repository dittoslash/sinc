var money = 0
var moneyperclick = 1
var mpms = 0
var hasPermit = "false"
window.onload = function () { //Loading script
txtBox("Loading");
window.setInterval(tick, 10);
$(".permithide").hide();
txtBox("Loaded tick")
money = parseFloat(Cookies.get("money"));
moneyperclick = parseFloat(Cookies.get("moneyperclick"));
mpms = parseFloat(Cookies.get("mpms"));
hasPermit = Cookies.get("hasPermit")
txtBox("Loaded cookies")
if (isNaN(money) && isNaN(mpms) && isNaN(moneyperclick)) {
	money = 0
	moneyperclick = 1
	mpms = 0
	hasPermit = "false"
}
txtBox("Fixed naan bread")
if (hasPermit == "true") {
	$(".permithide").show();
	$("#workerpermit").hide();
}
txtBox("Loaded permit cookie")
getElById('pointerupgrade').innerHTML = "Upgrade mouse for 1000 money (current: " + moneyperclick + ")"
txtBox("MPC display")
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


function buyWorker(i) { //WARNING MATH AHEAD >.<
	if (money > (((i * 100) - 1) + (i * 5) + (i * 100))) {
		money = money - (((i * 100)) + (i * 5) + (i * 100));
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
		money = money - 500
		hasPermit = true
		$(".permithide").show();
		$("#workerpermit").hide();
		txtBox("Bought permit")
	} else {
		txtBox("Couldn't afford");
	}
}
function upgradeMouse() {
	if (money > (1000) - 1) {
		money = money - 1000
		moneyperclick = moneyperclick + 1
		txtBox("Upgraded pointer")
		getElById('pointerupgrade').innerHTML = "Upgrade mouse for 1000 money (current: " + moneyperclick + ")"
		if (moneyperclick == 20) {
			$("#pointerupgrade").hide();
			txtBox("Max level of pointer reached")
		}
	} else {
		txtBox("Couldn't afford")
	}
}
$(window).unload(function() {
	Cookies.set("money", money);
	Cookies.set("moneyperclick", moneyperclick);
	Cookies.set("mpms", mpms);
	Cookies.set("hasPermit", hasPermit)
});