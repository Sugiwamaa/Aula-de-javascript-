const alunos = [
    {nome:'joao',
     nota: 5,
    turma: '18',},
  
    {nome: sofia,
    nota: 4,
    turma:'18',},

    {nome:'Paulo',
    nota: 6,
    turma: '2C',},



];

function alunoAprovados(alunos,media) {

    let alunoAprovados = []
    for (let i = 0; i < alunos.lenght; i++) {
     let {nota, nome } = alunos [i];
     if (nota >= media){
        alunoAprovados.push(nome);
     }
    }
return alunoAprovados;
     
}

console.log(alunosAprovados(alunos, 5));
