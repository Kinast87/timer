const relogio = document.querySelector('#relogio')
var inicio = document.querySelector('#iniciar')
inicio.addEventListener('click', iniciar)
var pausa = document.querySelector('#pausar')
pausa.addEventListener('click', pausar)
var zera = document.querySelector('#zerar')
zera.addEventListener('click', zerar)

//função que recebe a hora inicial
function criaHoraDosSegundos(segundos){
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-BR',{
        hour12: false,
        timeZone: 'GMT' //timezone para q comece zerado o relógio
    })
}
//declaradas fora da função p serem acessadas por todas
let segundos = 0
let timer
//recebe o evendo do botão iniciar
function iniciar(){ 
    //remove a cor vermelha do relógio, caso tenha sido acionada pela pausa
    relogio.classList.remove('pausa')
    //limpa qualquer timer que possa estar iniciado
    clearInterval(timer)
    //chama a função que recebe a hora e incrementa os segundos
    timer = setInterval(function (){
    segundos++
    relogio.innerHTML = criaHoraDosSegundos(segundos)
}, 1000)//trabalha com miléssimos de segundos, por isso 1000
}

//recebe o evento do botão pausar
function pausar (){
    //pausa o relógio
    clearInterval(timer)
    //atribui a cor vermelha ao relógio
    relogio.classList.add('pausa')
}

//recebe o evento do botão zerar
function zerar (){
    //remove a cor vermelha do relógio caso tenha sido acionada pela pausa
    relogio.classList.remove('pausa')
    //pausa o timer
    clearInterval(timer)
    //zera o timer
    relogio.innerHTML = '00:00:00'
    //zera os segundos, para que se iniciado comece do zero
    segundos = 0
}