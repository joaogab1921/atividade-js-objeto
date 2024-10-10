/*
1-
const pessoa = {
    nome: prompt("Digite seu nome:"),
    idade: parseInt(prompt("Digite sua idade:")),
    cidade: prompt("Digite a cidade onde mora:")
};

console.log("Dados da pessoa:", pessoa);

const opcao = prompt("O que você gostaria de atualizar? (1: Idade, 2: Cidade)");

if (opcao === "1") {
    pessoa.idade = parseInt(prompt("Digite a nova idade:"));
} else if (opcao === "2") {
    pessoa.cidade = prompt("Digite a nova cidade:");
}

console.log("Dados atualizados da pessoa:", pessoa);
2-
const livro1 = {
    nome: prompt("Digite o nome do primeiro livro:"),
    autor: prompt("Digite o autor do primeiro livro:"),
    anoPublicacao: parseInt(prompt("Digite o ano de publicação do primeiro livro:"))
};

const livro2 = {
    nome: prompt("Digite o nome do segundo livro:"),
    autor: prompt("Digite o autor do segundo livro:"),
    anoPublicacao: parseInt(prompt("Digite o ano de publicação do segundo livro:"))
};


const livroMaisAntigo = livro1.anoPublicacao < livro2.anoPublicacao ? livro1 : livro2;
console.log("Livro mais antigo:", livroMaisAntigo);


const livroBusca = livro1.nome.toLowerCase() === "estudando programação" || livro2.nome.toLowerCase() === "estudando programação";
console.log(livroBusca ? "SIM" : "NÃO");


if (livro1.autor === livro2.autor) {
    console.log("Os dois livros são do mesmo autor:", livro1.autor);
} else {
    console.log("Os autores são diferentes.");
    console.log("Autor do livro 1:", livro1.autor);
    console.log("Autor do livro 2:", livro2.autor);
}
3-
const carros = [];
let continuar = true;

while (continuar) {
    const carro = {
        modelo: prompt("Digite o modelo do carro:"),
        marca: prompt("Digite a marca do carro:"),
        ano: parseInt(prompt("Digite o ano do carro:")),
        valor: parseFloat(prompt("Digite o valor do carro:"))
    };
    
    carros.push(carro);
    
    continuar = prompt("Deseja adicionar outro carro? (s/n)").toLowerCase() === 's';
}

const carroMaisCaro = carros.reduce((carro1, carro2) => carro1.valor > carro2.valor ? carro1 : carro2);

console.log("Carro mais caro:", carroMaisCaro);

*/