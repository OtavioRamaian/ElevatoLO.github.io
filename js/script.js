document.addEventListener("DOMContentLoaded", function () {
    
    // --- 1. LÓGICA DE ANIMAÇÃO NO SCROLL (REVEAL) ---
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

    // Chama a função assim que a página carrega
    reveal();

    // --- 2. LÓGICA DO MODAL DINÂMICO DOS PRODUTOS ---
    var produtoModal = document.getElementById('produtoModal');
    
    if (produtoModal) {
        produtoModal.addEventListener('show.bs.modal', function (event) {
            // Pega o card que foi clicado (botão que acionou o modal)
            var button = event.relatedTarget;
            
            // Extrai as informações dos atributos data-* do HTML
            var title = button.getAttribute('data-title');
            var desc = button.getAttribute('data-desc');
            var img1 = button.getAttribute('data-img1');
            var img2 = button.getAttribute('data-img2');
            var img3 = button.getAttribute('data-img3');
            
            // Atualiza o conteúdo do modal
            var modalTitle = produtoModal.querySelector('#modalTitle');
            var modalDesc = produtoModal.querySelector('#modalDesc');
            var modalImage1 = produtoModal.querySelector('#modalImg1');
            var modalImage2 = produtoModal.querySelector('#modalImg2');
            var modalImage3 = produtoModal.querySelector('#modalImg3');
            
            modalTitle.textContent = title;
            modalDesc.textContent = desc;
            modalImage1.src = img1;
            modalImage2.src = img2;
            modalImage3.src = img3;
            
            // Altera o texto do botão do whatsApp para incluir o nome do produto específico
            var btnWhats = produtoModal.querySelector('.btn-success');
            var msgPersonalizada = "Olá Elevato, gostaria de um orçamento para: " + title;
            btnWhats.href = "https://wa.me/5511978085738?text=" + encodeURIComponent(msgPersonalizada);
        });
    }

});