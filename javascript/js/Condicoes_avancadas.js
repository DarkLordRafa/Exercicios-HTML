var a = true;
var b = false;

if (a == true && b == false){
	document.getElementById("condition1").innerHTML = "Neste resultado, TODAS as condições devem ser verdadeiras.";
}

if (a == false || b == false){
	document.getElementById("condition2").innerHTML = "Neste resultado, pelo menos uma condição deve ser verdadeira, OU TODAS.";
}

if ((a == true || b == true) && ((a == true) != (b == true))){
	document.getElementById("condition3").innerHTML = "Neste resultado, pelo menos uma condição deve ser verdadeira, MAS NÃO TODAS.";
}

a == true ? document.getElementById("condition4").innerHTML = "Este resultado utilizou uma condição verdadeira com operadores ternários." : document.getElementById("condition4").innerHTML = "Este resultado utilizou uma condição falsa com operadores ternários.";

a == false ? document.getElementById("condition5").innerHTML = "Este resultado utilizou uma condição verdadeira com operadores ternários." : document.getElementById("condition5").innerHTML = "Este resultado utilizou uma condição falsa com operadores ternários.";