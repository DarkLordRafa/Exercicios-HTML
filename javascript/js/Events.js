
//Atribuindo os elementos às variáveis:
let button = document.querySelector(".circle");
let containerElements = document.querySelectorAll(".container div");
let pokemonImage = document.querySelector(".pokemon-area__image");
let pokeballSound = document.querySelector("#pokeball-sound");
let charmanderSound = document.querySelector("#charmander-sound");
//Definir a variável fora dos blocos para ela poder ser acessada em qualquer lugar:
var pokeDisplayed = true;

function open_close(){
//Checando se o elemento possui a classe e fazendo as alterações:
	if (button.classList.contains("circle-not-active")){
		pokeDisplayed = true;
		pokeballSound.src = "assets/sounds/pokeout.mp3";
		pokeballSound.play();
		pokemonImage.style.opacity = "1";
//Toda vez que transição encerra, essa função verifica o valor de pokeDisplayed
//Por algum motivo só funcionou nessa ordem:
		pokemonImage.ontransitionend = () =>{
			if (pokeDisplayed === true){
				charmanderSound.play();
				}
		};
//Adicionando nova classe e removendo a antiga:
		button.classList.add("circle-active");
		button.classList.remove("circle-not-active");
//Fazendo alterações de acordo com a posição das divs na coleção:
		containerElements[0, 1].style.position = "absolute";
		containerElements[0].style.marginTop = "-20vh";
		containerElements[1].style.marginTop = "20vh";
	}
	else{
		pokeDisplayed = false;
		pokeballSound.src = "assets/sounds/pokereturn.mp3";
		pokemonImage.style.opacity = "0";
		pokeballSound.play();
//Fazendo alterações apenas quando o áudio acaba:
		pokeballSound.addEventListener("ended", () =>{
		if (pokeDisplayed === false){
				button.classList.add("circle-not-active");
				button.classList.remove("circle-active");
				containerElements[0].style.cssText = "position: relative; marginTop: auto";
				containerElements[1].style.cssText = "position: relative; marginTop: auto";
				}
			}
		);
	}
}

button.addEventListener("click", open_close);