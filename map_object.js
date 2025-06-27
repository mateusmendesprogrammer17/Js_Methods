const pessoas= [
    {nome: 'Lucas', idade: 20},
    {nome: 'Ana', idade: 25},
    {nome: 'João', idade: 30},
    {nome: 'Maria', idade: 22},
    {nome: 'Pedro', idade: 28}
];
function nomePessoas(pessoas){
    return pessoas.map((pessoa)=>{
        return pessoa.nome.toUpperCase();
    })

}
function idadePessoas(pessoas){
    return pessoas.map((pessoa)=>{
        return pessoa.idade+5
    })
}
function dadosPessoas(pessoas){

    return pessoas.map((pessoa)=>{
        person_data ={
            nome:pessoa.nome,
            idade:pessoa.idade

        }
        return person_data;
       
    })
}
console.log(dadosPessoas(pessoas));