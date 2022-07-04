
//Ao criar uma função começando com letra maiúscula, dizemos que é um objeto, e não uma função comum.
//Criando o objeto e passando os argumentos:
function Objeto(idade, função, área, atuando, curso){
//Agora atribuimos os valores com this para se referir ao objeto:
	this.idade = idade,
	this.função = função,
	this.área = área,
	this.atuando = atuando,
	this.curso = curso,
	this.escreva = function(){
	console.log("Este é um método do objeto.");
	};
}

//Construindo o objeto e passando os parâmetros:
var Rafael = new Objeto("22", "Desenvolvedor", "Front End", false, "JavaScript"
);
console.log(Rafael);

//Aninhando objetos em arrays:
var Rafael2 = [
	new Objeto("22", "Desenvolvedor", "Front End", false, "JavaScript"
	),
new Objeto("22", "Desenvolvedor", "Full Stack", true, "JavaScript"
	)
	];
//Mostrando o primeiro objeto:
console.log(Rafael2[0]);

//Mostrando o segundo objeto:
console.log(Rafael2[1]);

//Mostrando apenas uma propriedade do segundo objeto:
console.log(Rafael2[1].função);