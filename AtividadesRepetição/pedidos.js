const prompt = require('prompt-sync')();

let valorItem = parseFloat(prompt("Qual o valor do item: "))

let outroItem = prompt("Deseja adicionar mais algum item? s/n: ")

let valorTotal = valorItem

do {
    valorItem = parseFloat(prompt("Qual o valor deste item?"))
    calculo = valorItem + valorTotal
    outroItem = prompt("Deseja adicionar mais algum item? s/n: ")
} while (outroItem == 's')
console.log(calculo)

