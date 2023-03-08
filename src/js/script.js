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
        sessoes.focus()
    } else {

        localStorage.setItem('acao', String(acao.value))
        localStorage.setItem('pausa', String(pausa.value))
        localStorage.setItem('sessoes', String(sessoes.value))

        document.getElementById('config').style.setProperty('display','none','important')
        document.getElementById('timer').style.setProperty('display','block','important')

    }
}

function momentoAcao() {
    let valor_sessoes = localStorage.getItem('sessoes')

    if(valor_sessoes != '1'){
        document.getElementById('title_sessao').innerHTML = valor_sessoes + ' sessões restantes'
    }else {
        document.getElementById('title_sessao').innerHTML = valor_sessoes + 'sessão restante'
    }

    let title = document.getElementById('title')
    title.innerHTML = "AÇÃO"
    title.style.fontSize = '30px'
    title.style.fontWeight = 'bold'
    title.style.setProperty('color', '#15BE5D', 'impotant')

    min = Number(localStorage.getItem('acao'))

    min = min - 1
    segundos = 59
    
    document.getElementById('minutes_ok').innerHTML = min
    document.getElementById('segunds_ok').innerHTML = segundos

    var min_interval = setInterval(minTimer, 60000)
    var seg_interval = setInterval(segTimer, 1000)
}

function momentoPausa() {

}