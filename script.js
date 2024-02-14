document.getElementById("nao").addEventListener("click", function() {
    var btnSim= document.getElementById("sim");
    btnSim.style.fontSize = (parseInt(window.getComputedStyle(btnSim).fontSize) + 8) + "px";

    var newTexts = [
        "Se você recusar, eu ficarei muito, mais MUITO TRISTE.",
        "Você tem certeza?",
        "Por favor, me aceite, EU TE AMO <3",
        "Pense com calma, eu imploro, ficarei triste!",
        "Eu vou morrer se você não aceitar :*(",
        "Minha fofa(o), por favor :("
    ];
    var randomText = newTexts[Math.floor(Math.random() * newTexts.length)];
    document.getElementById("sim").innerHTML;
    document.getElementById("nao").innerHTML = randomText;
});
document.getElementById("sim").addEventListener("click", function(){
    var conteudo = document.querySelector(".conteudo");
    conteudo.innerHTML = "<h1>Obg te amo S2<h1/>";
    conteudo.style.backgroundColor = "white";
    conteudo.style.color = "black";
    var botoes = document.querySelectorAll(".btn")
    botoes.forEach(function(botao){
        botao.style.display = "none";
    });
    var divTexto = document.querySelector(".texto");
    divTexto.style.display = "none";
}); 