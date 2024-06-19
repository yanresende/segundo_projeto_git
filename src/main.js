const alunos = [
    { nome: "Alice", nota: 7.5 },
    { nome: "Bob", nota: 5.8 },
    { nome: "Carlos", nota: 8.0 },
    { nome: "Diana", nota: 6.2 },
    { nome: "Eva", nota: 9.3 },
];

function alunosAprovados(arrayDeAlunos) {
    return arrayDeAlunos.filter(aluno => aluno.nota >= 6);
}

const alunosAprovadosArray = alunosAprovados(alunos);

console.log(alunosAprovadosArray);
