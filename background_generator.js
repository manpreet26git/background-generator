var color1 = document.getElementsByTagName("input")[0];
var color2 = document.getElementsByTagName("input")[1];
var h3 = document.querySelector("h3");
var body = document.getElementsByTagName("body")[0];

function setGradient(){
	body.style.background = "linear-gradient(to right, " + color1.value + ", "  + color2.value +")";

	h3.textContent = body.style.background + ";";
    //h3.appendChild(document.createTextNode(color1.value + " " + color2.value));
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient); 