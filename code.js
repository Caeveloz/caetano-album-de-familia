var fotos=["caetano.jpg","vicente.jpg","charles.jpg","suzete.jpg"]
var nomes=["eu","meu irmão","meu pai","minha mae"]
var numero=0
function virar_pagina(){
    if(numero>3)
    {
    numero=0
    }
    document.getElementById("img1").src=fotos[numero]
    document.getElementById("nome").innerHTML=nomes[numero]
    numero++;
}