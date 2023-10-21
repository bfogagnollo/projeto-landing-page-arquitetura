    var setadireita = window.document.getElementById("setadireita")
    var setaesquerda = window.document.getElementById("setaesquerda")
    var fachadacasa = window.document.getElementById("fachadacasa")
    var sala = window.document.getElementById("imagem-secaodescritiva")

function RolarParaDireita() {
    sala.style = "display:none"
    fachadacasa.style = "display:flex"
    setaesquerda.style = "display:flex"
    setadireita.style = "display:none"
}

function RolarParaEsquerda(){
    sala.style = "display:flex"
    fachadacasa.style = "display:none"
    setaesquerda.style = "display:none"
    setadireita.style = "display:flex"

}






