

$(document).ready(function (){
    //--------------Scroll del menu-----------
    var acercaDe = $('#acercaDe').offset().top,
    semestre = $('#semestre').offset().top,
    noticias = $('#noticias').offset().top,
    siguenos = $('#siguenos').offset().top;

function transicion (boton, contenido){
    $(boton).on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: contenido
        }, 500)
    })
}

transicion('#btn-AcercaDe', acercaDe);
transicion('#btn-Semestre', semestre);
transicion('#btn-Noticias', noticias);
transicion('#btn-Siguenos', siguenos);

//-------------------- boton pdf--------------



});

   



