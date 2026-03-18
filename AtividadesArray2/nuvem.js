const prompt = require("prompt-sync")();

let Servidor = {
    nomeServidor: 'Servidor Principal AWS' ,
    capacidadeMaxGb: 500 ,
    sitesHospedados: []
}

let siteOnline1 = {
    dominio: 'nsei' ,
    tamanhoOcupGb: 39 ,
}
Servidor.sitesHospedados

let pesoGb = Servidor.capacidadeMaxGb = Servidor.capacidadeMaxGb - siteOnline1.tamanhoOcupGb

let 