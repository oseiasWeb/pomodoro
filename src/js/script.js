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

        momentoAcao()
    }
}

function momentoAcao() {
    let valor_sessoes = localStorage.getItem('sessoes')

    if(valor_sessoes != '1'){
        document.getElementById('title_sessao').innerHTML = valor_sessoes + ' sessões restantes'
    }else {
        document.getElementById('title_sessao').innerHTML = valor_sessoes + ' sessão restante'
    }

    let title = document.getElementById('title')
    title.innerHTML = "AÇÃO"
    title.style.fontSize = '30px'
    title.style.fontWeight = 'bold'
    title.style.setProperty('color', '#15BE5D', 'important')

    min = Number(localStorage.getItem('acao'))

    min = min - 1
    segundos = 59
    
    document.getElementById('minutes_ok').innerHTML = min
    document.getElementById('seconds_ok').innerHTML = segundos

    var min_interval = setInterval(minTimer, 60000)
    var seg_interval = setInterval(segTimer, 1000)

    function minTimer(){
        min = min - 1
        document.getElementById('minutes_ok').innerHTML = min
    }

    function segTimer(){
        segundos = segundos - 1 
        document.getElementById('seconds_ok').innerHTML = segundos

        if(segundos <= 0){
            if(min <= 0){
                clearInterval(min_interval)
                clearInterval(seg_interval)

                final.play();

                momentoPausa()
            }
            segundos = 60
        }
    }
}

function momentoPausa() {
    let title = document.getElementById('title')
    title.innerHTML = "PAUSA"
    title.style.fontSize = '30px'
    title.style.fontWeight = 'bold'
    title.style.setProperty('color', '#F77260', 'important')

    min_pausa = Number(localStorage.getItem('pausa'))

    min_pausa = min_pausa - 1
    segundos = 59

    document.getElementById('minutes_ok').innerHTML = min_pausa
    document.getElementById('seconds_ok').innerHTML = segundos

    var min_interval = setInterval(minTimer, 60000)
    var seg_interval = setInterval(segTimer, 1000)

    function minTimer(){
        min_pausa = min_pausa - 1
        document.getElementById('minutes_ok').innerHTML = min_pausa
    }

    function segTimer(){
        segundos = segundos - 1 
        document.getElementById('seconds_ok').innerHTML = segundos

        if(segundos <= 0){
            if(min_pausa <= 0){
                sessao = Number(localStorage.getItem('sessoes'))
                sessao = sessao - 1
                localStorage.setItem('sessoes', String(sessao))

                clearInterval(min_interval)
                clearInterval(seg_interval)
                if(sessao <= 0){
                    final.play()
                    localStorage.clear()
                    document.getElementById('config').style.setProperty('display','none','important')
                    document.getElementById('timer').style.setProperty('display','block','important')
                    document.getElementById('fim').style.setProperty('display','block','important')
                } else {
                 
                    volta.play();
                    momentoAcao()
                }
            }
            segundos = 60
        } 
    }

}