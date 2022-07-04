//Closures são funções internas que dependem de variáveis externas para funcionar, então elas não descartam as variáveis quando a função fecha:

function calc(){
	var a = 5;
	var b = 2;
		function mult(){
			var mult_result = a * b;
			return mult_result;
		}
	return mult;
}

var resultado = calc();
console.log("O resultado é: " + resultado());