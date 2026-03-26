const prompt = require('prompt-sync')();

let caixa = {
        nomeOperador: "Rob" ,
        saldo: 100 ,
        historicoTransaçoes: []
    }


function registrarVenda (valor) {
    caixa.saldo += valor;
    return caixa.saldo;
}

function registrarDespesa (valor) {
    caixa.saldo -= valor;
    return caixa.saldo;
}

let opcao;

do {
    opcao = prompt("Digite V , D, ou S: ").toUpperCase();

    switch (true) {
        case opcao == 'V':
            let valorVenda = Number(prompt("Digite o valor da Venda: "));
            registrarVenda(valorVenda);
            caixa.historicoTransaçoes.push('Entrada: ' + valorVenda);
            break;
        case opcao == 'D':
            let valorDespesa = Number(prompt('Digite o valor da Despesa: '));
            registrarDespesa(valorDespesa);
            caixa.historicoTransaçoes.push("Saida: " + valorDespesa);
            break;
        case opcao == 'S':
            console.log("Encerrando Processo...");
            break;
        default:
            console.log("Opção Inválida!");
    }
} while (opcao !== "S");

console.log(caixa)