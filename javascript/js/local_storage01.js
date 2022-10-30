
const nullMessage = document.querySelector("#null-message");
const userInfo = document.querySelector("#user-info");
const formInputs = document.querySelector("#form__inputs");
const userName = document.querySelector("#user-name span");
const userAge = document.querySelector("#user-age span");
const userFood = document.querySelector("#user-food span");
const userNameInput = document.querySelector("#user-name-input");
const userAgeInput = document.querySelector("#user-age-input");
const userFoodInput = document.querySelector("#user-food-input");
let savedUser;
let newUser;

function displayUserData(){
	if (newUser === true){
		userInfo.style.display ="none";
		nullMessage.classList.remove("d-none");
	}
	else{
		userInfo.style.display = "block";
		nullMessage.classList.add("d-none");
	}
	userName.innerHTML = savedUser.userNameProp;
	userAge.innerHTML = savedUser.userAgeProp;
	userFood.innerHTML = savedUser.userFoodProp;
	const userData = document.querySelectorAll("#user-info h3");
	userData.forEach((element) =>{
		if (element.getElementsByTagName("span")[0].innerHTML == ""){
			element.classList.add("d-none");
		}
		else{
			element.classList.remove("d-none");
		}
	});
}

const checkNewUser = () =>{
	try{
		savedUser = JSON.parse(window.localStorage.getItem("user_key"));
		console.log(savedUser.userNameProp);
		newUser = false;
		console.log(newUser);
	}
	catch {
		savedUser = {
			userNameProp: "",
			userAgeProp: "",
			userFoodProp: "",
		};
		console.log(savedUser.userNameProp);
		newUser = true;
	}
	finally{
		displayUserData();
	}
}
checkNewUser();
const saveButton = document.querySelector("#submit");
const loadButton = document.querySelector("#load");
const resetButton = document.querySelector("#reset");
const modalResetButton = document.querySelector("#modal-reset");
const editButton = document.querySelector("#edit");

if (newUser === true){
resetButton.classList.add("d-none");
}

function saveUser(){
	savedUser.userNameProp = userNameInput.value;
	savedUser.userAgeProp = userAgeInput.value;
	savedUser.userFoodProp = userFoodInput.value;
	window.localStorage.setItem("user_key", JSON.stringify(savedUser));
	newUser = false;
	nullMessage.classList.add("d-none");
	resetButton.classList.remove("d-none");
	alert("Seu usuário foi salvo. Agora você pode carregá-lo");
}

function loadUser(){
	if (newUser === false){
		savedUser = JSON.parse(window.localStorage.getItem("user_key"));
		displayUserData();
		formInputs.classList.add("d-none");
		alert("Usuário carregado com sucesso 🙂");
		console.log(savedUser.userNameProp);
		}
	else{
			alert("Nenhum usuário foi encontrado.")
		}
}

function resetData(){
	window.localStorage.clear();
	location.reload();
}

function clearInput(){
	const inputs = document.querySelectorAll("#form__inputs input");
	inputs.forEach((element) =>{
		element.value = "";
	})
}

saveButton.addEventListener("click", (click) => {
	if (userNameInput.value != "" && userAgeInput.value <= 150){
	click.preventDefault();
	saveUser();
	clearInput();
	formInputs.classList.remove("d-flex");
	formInputs.classList.add("d-none");
	saveButton.classList.add("d-none");
	editButton.classList.remove("d-none");
	}
});
editButton.addEventListener("click", () =>{
	formInputs.classList.add("d-flex");
	formInputs.classList.remove("d-none");
	saveButton.classList.remove("d-none");
	editButton.classList.add("d-none");
});
loadButton.addEventListener("click", loadUser);
modalResetButton.addEventListener("click", resetData);