var money = 0
var moneyperclick = 1
var mpms = 0.01
var hasPermit = "false"
window.onload = function () { //Loading script
txtBox("Loading");
window.setInterval(tick, 1000);
window.setInterval(millitick, 1);
$(".permithide").hide();
txtBox("Loaded tick")
money = parseFloat(Cookies.get("money")); //Get cookies and parse them, cookies are strings
moneyperclick = parseFloat(Cookies.get("moneyperclick"));
mpms = parseFloat(Cookies.get("mpms"));
hasPermit = Cookies.get("hasPermit")
txtBox("Loaded cookies")
if (isNaN(money) && isNaN(mpms) && isNaN(moneyperclick)) { //Naan bread prevention
	money = 0
	moneyperclick = 1
	mpms = 0.01
	hasPermit = "false"
}
txtBox("Fixed naan bread")
if (hasPermit == "true") { //
	$(".permithide").show();
	$("#workerpermit").hide();
}
txtBox("Loaded permit cookie");
$('#evoinfo').hide();
$('#evolve').hide();
txtBox("Hidden evolve things");
if (getParamByName("woof") == "bark") {
	moneyperclick = 25
}
if (moneyperclick > 1 && moneyperclick < 20) { //technically the 'current' message should only appear until you've bought the upgrade once, this fixes that
	$("#pointerupgrade").html("Upgrade mouse for 1000 money (current: " + moneyperclick + ")");
}
if (moneyperclick > 19) {
	$("#pointerupgrade").hide();
}
txtBox("MPC display");
txtBox("Sinc Loaded");
$("#spoilers").show(); //This is placed after everything to make sure that spoilers only show after there's NO error.
}





//Functions
function evolve() {
	moneyperclick = mozRand((money - 10000), (money - 5000))
	money = 0
	hasPermit = "false"
	mpms = 0.01
	location.reload()
}

function pressButton() {
	money = money + moneyperclick;
	updateMoney();
}
function tick() {
	money = money + mpms
	if (money > 10000) {
		$("#evolve").show();
	}
}
function millitick() {
	updateMoney()
}


function buyWorker(i) { //WARNING MATH AHEAD >.<
	if (money > (((i * 100) - 1) + (i * 5))) {
		money = money - (((i * 100)) + (i * 5));
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
		$("#pointerupgrade").html("Upgrade mouse for 1000 money (current: " + moneyperclick + ")")
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