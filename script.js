document.addEventListener("DOMContentLoaded", function () {
    
    // Função para revelar os elementos quando o usuário rolar a página
    function reveal() {
        var reveals = document.querySelectorAll(".reveal-left, .reveal-right, .reveal-up");

        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 100; // Distância antes de ativar a animação

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            }
        }
    }

    // Chama a função ao rolar o scroll
    window.addEventListener("scroll", reveal);

    // Chama a função assim que a página carrega (para animar os elementos do topo)
    reveal();

});