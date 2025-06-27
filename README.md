# Métodos filter e reduce no JavaScript
Este repositório tem como objetivo demonstrar, de forma clara e prática, o uso dos métodos filter() e reduce() em JavaScript. Esses métodos fazem parte da API de arrays da linguagem e são amplamente utilizados em manipulação e transformação de dados.

📌 Objetivo
Explicar como utilizar os métodos:

filter(): para filtrar elementos de um array com base em uma condição.

reduce(): para transformar um array em um único valor (número, string, objeto, etc.) com base em uma lógica de agregação.

🔍 Método filter()
O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.


array.filter(callback(element[, index[, array]])[, thisArg])
✅ Exemplo

const numeros = [1, 2, 3, 4, 5, 6];
const pares = numeros.filter(numero => numero % 2 === 0);

console.log(pares); // [2, 4, 6]
🔄 Método reduce()
O método reduce() aplica uma função a um acumulador e a cada elemento do array (da esquerda para a direita), reduzindo-o a um único valor.

array.reduce(callback(acumulador, valorAtual[, index[, array]])[, valorInicial])
✅ Exemplo

const numeros = [1, 2, 3, 4, 5];
const soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

console.log(soma); // 15
🧪 Como executar
Clone este repositório:


git clone https://github.com/seu-usuario/nome-do-repositorio.git
Navegue até o diretório:


cd nome-do-repositorio
Execute os exemplos em um ambiente JavaScript (navegador ou Node.js):





Desenvolvido por [Mateus Mendes].
Contribuições e sugestões são bem-vindas!
