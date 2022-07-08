
let button = document.querySelector(".circle");
let containerElements = document.querySelectorAll(".container div");

function open_close(){
	if (button.classList.contains("circle-not-active")){
		button.classList.add("circle-active");
		button.classList.remove("circle-not-active");
		containerElements[0, 1].style.position = "absolute";
		containerElements[0].style.marginTop = "-20vh";
		containerElements[1].style.marginTop = "20vh";
	}
	else{
		button.classList.add("circle-not-active");
		button.classList.remove("circle-active");
		containerElements[0].style.cssText = "position: relative; marginTop: auto";
		containerElements[1].style.cssText = "position: relative; marginTop: auto";
	}
}

button.addEventListener("click", open_close);