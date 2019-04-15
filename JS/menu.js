function showMenu() {
	var x = document.getElementById("navigation");
	if (x.className==="clearfix") {
		x.className += " responsive";
	} else {
		x.className = "clearfix";
	}
}