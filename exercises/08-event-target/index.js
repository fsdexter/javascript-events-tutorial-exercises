window.onload = function loadFn() {
	var containerElm = document.getElementById("container");
	containerElm.addEventListener("click", function(event) {
        //you code here
        alert("type " + event.target.nodeName + " at id " + event.target.id);
	});
};
