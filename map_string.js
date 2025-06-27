let nomes = ["Lucas", "Ana", "João", "Maria", "Pedro"];


function NomesMinusculos(nomes){
    return nomes.map((nome)=>{
       
        return nome.toLowerCase();

    })
}
function NomesMaiusculos(nomes){
    return nomes.map((nome)=>{
        return nome.toUpperCase();
    })
}

console.log(nomes);
console.log(NomesMinusculos(nomes));
console.log(NomesMaiusculos(nomes));
