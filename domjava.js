var buttons = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

buttons.addEventListener("click", function() {
	console.log(input.value);
	var li = document.createElement("li");
	li.appendChild(document.createTextNode("input.value"));
	ul.appendChild(li);
}) 