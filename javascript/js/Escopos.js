
//Uma variável let, dentro de um bloco, tera seu valor manipulado apenas naquele bloco.
//Se alterar uma variável var dentro de um bloco, irá alterá-la globalmente também.
//A variável const funciona como a let, porém não pode ser alterada.

let color = "red";

function change(){
	if (color == "red"){
		let color = "blue";
		console.log(color);
	}
console.log(color);
}
change();

