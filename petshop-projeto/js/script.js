$(document).ready(function() {
    // Função para mover o carrossel automaticamente
    function iniciarCarrossel(selector) {
        let $carrossel = $(selector);
        let $itens = $carrossel.find('.carrossel-item');
        let index = 0;

        setInterval(function() {
            $carrossel.scrollLeft($itens.eq(index).position().left);
            index = (index + 1) % $itens.length;
        }, 3000); // Troca de imagem a cada 3 segundos
    }

    iniciarCarrossel('#carrossel-produtos');
    iniciarCarrossel('#carrossel-servicos');
});
