let acao = document.getElementById('acao')
let pausa = document.getElementById('pausa')
let sessoes = document.getElementById('sessoes')
let segundos

var volta = new Audio("./src/audio/volta.mp3")
var final = new Audio("./src/audio/final.mp3")

function iniciar() {
    if(acao.value == 0){
        document.getElementById('erro_acao').innerHTML= "Informe os minutos"
        acao.focus()
    } else if (pausa.value == 0) {
        document.getElementById('erro_pausa').innerHTML= "Informe a pausa"
        acao.focus()
    } else if (sessoes.value == 0) {
        document.getElementById('erro_sessoes').innerHTML= "Informe as sessões"
        acao.focus()
    } else {

        

        localStorage.setItem('acao', String(acao.value))
        localStorage.setItem('pausa', String(pausa.value))
        localStorage.setItem('sessoes', String(sessoes.value))

        document.getElementById('config').style.setProperty('display','none','important') 
        document.getElementById('timer').style.setProperty('display','block','important') 
    }
}