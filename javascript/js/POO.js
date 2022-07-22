
//Criando objeto com class:
class Person{
//Função constructor com parâmetros:
	constructor(name, color, age){
//Propriedades do objeto:
		this.name = name;
		this.color = color;
		this.age = age;
	}
//Método do objeto:
//Este método já é outra função, fora da primeira:
	printPerson(){
		console.log(`${this.name} é da cor ${this.color}, e tem ${this.age} anos.`);
	}
//Metódo estático:
//O método estático não utiliza os parâmetros, portanto não é preciso chamá-lo com argumentos, mas ele também não tem acesso aos this. E para chamá-lo se chama pela própria class Person, e não pela constante person:
	static print(){
		console.log("Objeto.");
	}
}

//Criando objeto herdeiro:
class Rafael extends Person{
//O constructor herdeiro precisa ter os parâmetros do pai. Além disso adicionei mais alguns:
	constructor(name, color, age, nick, objective){
		super(name, color, age);
		this.nick = nick;
		this.objective = objective;
	}
	
		printAbout(){
			console.log(`Meu nome é ${this.name}, meu apelido é ${this.nick}, e meu objetivo é ${this.objective}`);
		}
}


//Atribuindo o objeto à uma constante:
const person = new Person("Thiago", "pardo", 25);
//Atribuindo objeto herdeiro à outra constante:
const rafael = new Rafael("Rafael", "branco", 22, "RafaDark", "Desenvolvedor Full Stack.");

console.log(person);
console.log(rafael);

//Chamando método:
person.printPerson();
//Chamando método estático:
Person.print();

//O objeto herdeiro tem acesso a todos os métodos do objeto pai, mesmo que ele não tenha o método:
rafael.printPerson();
Rafael.print();

//Chamando o método de rafael:
rafael.printAbout();