document.addEventListener("DOMContentLoaded", function () {
    
    // --- 1. LÓGICA DE ANIMAÇÃO NO SCROLL (REVEAL) ---
    function reveal() {
        var reveals = document.querySelectorAll(".reveal-left, .reveal-right, .reveal-up");

        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 100;

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            }
        }
    }
    window.addEventListener("scroll", reveal);
    reveal();

    // --- 2. LÓGICA DO MODAL DINÂMICO DOS PRODUTOS ---
    var produtoModal = document.getElementById('produtoModal');
    
    if (produtoModal) {
        produtoModal.addEventListener('show.bs.modal', function (event) {
            var button = event.relatedTarget;
            
            var title = button.getAttribute('data-title');
            var desc = button.getAttribute('data-desc');
            var img1 = button.getAttribute('data-img1');
            var img2 = button.getAttribute('data-img2');
            var img3 = button.getAttribute('data-img3');
            var label1 = button.getAttribute('data-label1');
            var label2 = button.getAttribute('data-label2');
            var label3 = button.getAttribute('data-label3');
            
            produtoModal.querySelector('#modalTitle').textContent = title;
            produtoModal.querySelector('#modalDesc').textContent = desc;
            
            produtoModal.querySelector('#modalImg1').src = img1;
            produtoModal.querySelector('#modalLabel1').textContent = label1;
            
            produtoModal.querySelector('#modalImg2').src = img2;
            produtoModal.querySelector('#modalLabel2').textContent = label2;
            
            produtoModal.querySelector('#modalImg3').src = img3;
            produtoModal.querySelector('#modalLabel3').textContent = label3;
            
            // -------------------------------------------------------------
            // ALTERAÇÃO DO TEXTO DO WHATSAPP (Aplica a palavra de cada card)
            // -------------------------------------------------------------
            var btnWhats = produtoModal.querySelector('.btn-success');
            var msgPersonalizada = "Olá Elevato, gostaria de um orçamento para: " + title;
            btnWhats.href = "https://wa.me/5511978085738?text=" + encodeURIComponent(msgPersonalizada);
        });
    }

    // --- 3. LÓGICA DO LIGHTBOX (FOTO EM TELA CHEIA) ---
    
    // Cria o elemento do Lightbox no HTML via JavaScript
    var lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.innerHTML = `
        <span class="close-lightbox">&times;</span>
        <img src="" id="lightbox-img">
    `;
    document.body.appendChild(lightbox);

    var lightboxImg = document.getElementById('lightbox-img');

    // Função para abrir a foto em tela cheia
    function openLightbox(src) {
        if(src && !src.endsWith(window.location.pathname)) {
            lightboxImg.src = src;
            lightbox.classList.add('active');
        }
    }

    // Fecha o Lightbox ao clicar no "X" ou fora da imagem
    lightbox.addEventListener('click', function(e) {
        if (e.target !== lightboxImg) {
            lightbox.classList.remove('active');
        }
    });

    // Pega as 3 imagens de dentro do Modal e adiciona o evento de clique nelas
    var modalImages = [
        document.getElementById('modalImg1'),
        document.getElementById('modalImg2'),
        document.getElementById('modalImg3')
    ];

    modalImages.forEach(function(img) {
        if (img) {
            img.addEventListener('click', function() {
                openLightbox(this.src); // Abre a imagem clicada no Lightbox
            });
        }
    });

});