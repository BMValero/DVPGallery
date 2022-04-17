$(document).ready(function(){

    $('.botonSubir').click(function(){
        $('body ,html').animate({
            scrollTop: '0px'
        }, 700); /*Aquí podemos cambiar la velocidad de la subida , donde 700 son milisegundos*/
    });

    $(window).scroll(function(){
        if( $(this).scrollTop() > 0 ) {
            $('.botonSubir').slideDown(300);
        } else {
            $('.botonSubir').slideUp(300);
        }
    });
});