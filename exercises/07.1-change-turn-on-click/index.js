var currentUser = "Mario";

window.onload = function loadfn() {
	document.getElementById("screen").innerHTML = "It's " + currentUser + "'s turn";
};

window.turnChanger = function turnChanger() {
	//	if (currentUser == "Mario") {
	//		currentUser = "Juan";
	//	} else {
	//		currentUser = "Mario";
	//	}
	switch (currentUser) {
		case "Mario":
			// code block
			currentUser = "Juan";
			break;
		case "Juan":
			// code block
			currentUser = "Josh";
			break;
		case "Josh":
			// code block
			currentUser = "Mario";
			break;
		default:
			currentUser = "Mario";
	}
	document.getElementById("screen").innerHTML = "It's " + currentUser + "'s turn";
};
