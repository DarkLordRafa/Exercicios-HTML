//Pegando os elementos HTML:
var nameImput = document.querySelector("#name");
var colorImput = document.querySelector("#color");
var submitButton = document.querySelector("#submit");
var registeredUsers = document.querySelector("#users__registered-users");

submitButton.addEventListener("click", function(){
		if (nameImput.value != "" || colorImput.value != ""){
		create(nameImput.value, colorImput.value);
		}
	}
);

function create(name, color){
	var data = {
		name: name,
		color: color
	};
	return firebase.database().ref().child("users").push(data);
}

firebase.database().ref("users").on("value", function(snapshot){
	registeredUsers.innerHTML = "";
	snapshot.forEach(function(item){
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(`Usuário: ${item.val().name} | Cor:  ${item.val().color}`));
		registeredUsers.appendChild(li);
	});
});
