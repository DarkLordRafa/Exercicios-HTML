
const mobileMenuAgents = document.querySelectorAll(".menu-agent");
const mobileMenuArea = document.querySelector(".mobile-menu-area");
const mobileMenu = document.querySelector(".header__mobile-menu")

function open_close(){
	if (mobileMenuArea.style.width == "100%"){
		mobileMenuArea.style.width = "0%";
		mobileMenu.style.width = "0%";
		
	}
	else{
		mobileMenuArea.style.width = "100%";
		mobileMenu.style.width = "60vw";
	}
}

//Adicionando a função open_close para cada item do array mobileMenuAgents:
mobileMenuAgents.forEach(function(agent){
	agent.addEventListener("click", open_close);
});