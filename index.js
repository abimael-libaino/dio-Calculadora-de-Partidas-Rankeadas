const prompt = require("prompt-sync")({ sigint: true }) //Inclui o modulo "prompt-sync" para poder ser usado no codigo.
let vitorias = prompt("Quantas vitorias? :")// vai perguntar e reter o numero de vitorias
let derrotas = prompt("Quantas derrotas? :")//vai perguntar e reter o numero de derrotas
let saldoVitorias = vitorias - derrotas 
let nivel = seletorDenivel(saldoVitorias)// funcao que vai verificar o nivel de acordo com o saldo de vitorias

console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`)//vai printar a frase com os dados


function seletorDenivel (sdv) {
let selecao = "  "
if(sdv<11){
  selecao = "Ferro"
 } else if(sdv>10 && sdv<21){
     selecao = "Bronze"
 } else if(sdv>20 && sdv<51){
     selecao = "Prata"
 } else if(sdv>50 && sdv<81){
     selecao = "Ouro"
 } else if(sdv>80 && sdv<91){
     selecao = "Diamante"
 } else if(sdv>90 && sdv<101){
     selecao = "Lendário"
 } else if(sdv>100){
     selecao = "Imortal"
 }
return selecao
}