// Efecto al cargar
$(document).ready(function() {
    $('.spa-animated').each(function(i) {
        $(this).delay(100 * i).queue(function() {
$(this).addClass('body_fadeIn').dequeue();
});
});
});