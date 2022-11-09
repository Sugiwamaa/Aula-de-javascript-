function calculadora(anos) {

// esse aqui é o codigo que analisa os dados necessarios para o resultado do codigo
    return`Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos}
    anos de idade.`;


    // já essas são as informações sobre as pessoas analizadas 

// os {} são usados por
};
const pessoal={
    nome:'gabriel',
    idade: 23,

};
const pessoa2 = {
    nome: 'Debinho',
    idade: 20,

};
const pessoa3 = {
    nome:'eloi',
    idade: 90,

};

//esse comando é o que vai dar a calculadora a sua função , declarando os dados das pessoas
console.log(calculadora.call(pessoa3, 40));
    console.log(calculadora.apply(pessoa2, [24]));

    alert(calculadora.call(pessoa3, 40));