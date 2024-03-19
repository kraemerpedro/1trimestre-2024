const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i=0; i < botoes.length; i++) {
   botoes[i].onclick = function(){

    for(let j=0; j<botoes.length; j++){
        botoes[j].classList.remove("ativo");
        textos[j].classList.remove("ativo");
    }
    botoes[i].classList.add("ativo");
    textos[i].classList.add("ativo");
   }
}
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-10-05T00:00:00");
function calculatempo(tempoobjetivo){

let tempoatual= new Date();
let tempofinal= tempotempoobjetivo-tempoatual;
let segundos = math.floor(tempofinal)/ 1000;
let minutos = math.floor(segundos/60)
let horas = math.floor(minutos/60)
let dias = math.floor(horas/24)

segundos%=60;
minutos%=60
horas%=24
return dias+horas+horas+minutos+minutos+segondos+segundos;



}