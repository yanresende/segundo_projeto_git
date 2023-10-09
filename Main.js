function Pessoa(nome, idade, genero) {
    this.nome = nome;
    this.idade = idade;
    this.genero = genero;
}

function Funcionario(nome, cargo, salario, idade, genero) {
    this.cargo = cargo;
    let _salario = salario;

    Pessoa.call(this, nome, idade, genero);
}

function Cliente(nome, assFidelidade, idade, genero) {
    Pessoa.call(this, nome, idade, genero);
    this.assFidelidade = assFidelidade;

}

const funcionario1 = new Funcionario("Yan", "Chefe", "6000", "22", "Masculino")
const funcionario2 = new Funcionario("Alex", "TI", "2500", "32", "Masculino")
const cliente1 = new Cliente("Bianco", "Ativada", "40", "Feminino")
console.log(funcionario1);
console.log(funcionario2);
console.log(cliente1);