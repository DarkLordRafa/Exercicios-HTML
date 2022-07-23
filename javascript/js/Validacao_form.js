
const form = document.querySelector("form");
const emailInput = document.querySelector(".input-email");
const passwordInput = document.querySelector(".input-password");
const topErrorMessage = document.querySelector(".top-error-message");
const emailErrorMessage = document.querySelector(".email-error-message");
const passwordErrorMessage = document.querySelector(".password-error-message");
const submitButton = document.querySelector(".input-submit");
const formArea = document.querySelector(".form-area");
const confirmedIcon = document.querySelector(".confirmed-icon");


submitButton.addEventListener("click", emptyValidation);


function emptyValidation(button){
	button.preventDefault();
	if (emailInput.value == "" || passwordInput.value == ""){
		topErrorMessage.innerHTML = "*Por favor insira um email e senha.";
		form.classList.add("shake");
		form.addEventListener("animationend", function(){
			form.classList.remove("shake");
			}
		);
		submitButton.classList.add("incorrect");
	}
	else{
		submitButton.classList.remove("incorrect");
		submitButton.classList.add("correct");
		form.classList.add("rotate");
		form.addEventListener("animationend", function(){
				formArea.style.backgroundColor = "green";
				confirmedIcon.style.visibility = "visible";
				function submitForm(){
					form.submit();
				}
				setTimeout(submitForm, 1000);
			}
		);
	}
}

