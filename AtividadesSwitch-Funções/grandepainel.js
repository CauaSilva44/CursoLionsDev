const prompt = require('prompt-sync')();

let caixa = {
        nomeOperador: "Rob" ,
        saldo: 100 ,
        historicoTransaçoes: []
    }


function registrarVenda (valorVenda) {
    caixa.saldo += valorVenda;
    return caixa.saldo;
}

function registrarDespesa (valorDespesa) {
    caixa.saldo -= valorDespesa;
    return caixa.saldo;
}

let opcao;

do {
    opcao = prompt("Digite V (Venda) , D (Despesa), ou S (Sair): ").toUpperCase();

    switch (true) {
        case opcao == 'V':
            let valorVenda = Number(prompt("Digite o valor da Venda: "));
            registrarVenda(valorVenda);
            caixa.historicoTransaçoes.push('Venda: ' + valorVenda);
            break;
        case opcao == 'D':
            let valorDespesa = Number(prompt('Digite o valor da Despesa: '));
            registrarDespesa(valorDespesa);
            caixa.historicoTransaçoes.push("Despesa: " + valorDespesa);
            break;
        case opcao == 'S':
            console.log("Encerrando Processo...");
            break;
        default:
            console.log("Opção Inválida!");
    }
} while (opcao !== "S");

console.log(caixa)