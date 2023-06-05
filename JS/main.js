let setaEsquerda = window.document.getElementById("left")
let Leonardo = window.document.getElementById("leonardo") 
let Samantha = window.document.getElementById("samantha") 
let Bruna = window.document.getElementById("bruna") 
let setaDireita = window.document.getElementById("right")

function RolarParaDireita(){
    Leonardo.style ="display:none"
    Bruna.style = "display:flex"
    setaDireita.style = "display:none"
    setaEsquerda.style = "display:flex"
}

function RolarParaEsquerda(){
    Leonardo.style ="display:flex"
    Bruna.style = "display:none"
    setaDireita.style = "display:flex; "
    setaEsquerda.style = "display:none; margin: 55%"
}


