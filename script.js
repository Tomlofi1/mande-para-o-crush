document.addEventListener("DOMContentLoaded", function() {
    var naoButton = document.querySelector(".glow-on-hover:nth-of-type(2)");
    var simButton = document.querySelector(".glow-on-hover:first-of-type");

    naoButton.addEventListener("click", function() {
        var currentFontSize = parseInt(window.getComputedStyle(simButton).fontSize);
        var newFontSize = currentFontSize + 8;
        simButton.style.fontSize = newFontSize + "px";
        simButton.style.width = "calc(220px + " + (newFontSize - 16) * 2 + "px)"; 
        simButton.style.height = "calc(50px + " + (newFontSize - 16) + "px)"; 
        var newTexts = [
            "Se você recusar, eu ficarei muito, mais MUITO TRISTE.",
            "Você tem certeza?",
            "Por favor, me aceite, EU TE AMO <3",
            "Pense com calma, eu imploro, ficarei triste!",
            "Eu vou morrer se você não aceitar :*(",
            "Minha fofa(o), por favor :("
        ];
        var randomText = newTexts[Math.floor(Math.random() * newTexts.length)];
        naoButton.innerHTML = randomText;
    });

    simButton.addEventListener("click", function(){
        var conteudo = document.querySelector(".conteudo");
        conteudo.innerHTML = "<h1>Obg te amo S2<h1/>";
        conteudo.style.backgroundColor = "white";
        conteudo.style.color = "black";
        var botoes = document.querySelectorAll(".glow-on-hover");
        botoes.forEach(function(botao){
            botao.style.display = "none";
        });
        var divTexto = document.querySelector(".texto");
        divTexto.style.display = "none";
    });
});
