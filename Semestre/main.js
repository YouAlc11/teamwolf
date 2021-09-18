$(document).ready(function(){
   var relatoria = $('#relatoria');
   var conceptos = $('#1-1');
   var visita = $('#visita');
   var punto1 = $('#punto-1');
   var punto2 = $('#punto-2');
   var punto3 = $('#punto-3');
   var punto4doc = $('#punto-4doc');
   var punto4pres = $('#punto-4pres');
   var punto5pres = $('#1-4pres');
   var punto5cu = $('#1-4cu');
  

    function Cambio (boton, direccion){
        $(boton).on('click', function(){
            $('#iframe').attr({'src': direccion});
            $('#iframe').css({
                'width':'100%',
                'height': '100%'
            });
        });
    }

    Cambio(conceptos, 'Trabajos/1-1.pdf');
    Cambio(relatoria, 'Trabajos/relatoria.pdf');
    Cambio(visita, 'Trabajos/VisitaCIC.pdf');
    Cambio(punto1, 'Trabajos/1.3 Legislacionpunto1Documento.pdf');
    Cambio(punto2, 'Trabajos/1.3 Legislacionpunto2Documento.pdf');
    Cambio(punto3, 'Trabajos/1.3 Legislacionpunto3Presentacion.pdf');
    Cambio(punto4doc, 'Trabajos/1.3 Legislacionpunto4Documento.pdf');
    Cambio(punto4pres, 'Trabajos/1.3 Legislacionpunto4Presentacion.pdf');
    Cambio(punto5pres, 'Trabajos/1.4Presentacion.pdf');
    Cambio(punto5cu, 'Trabajos/1.4Cuadrosinoptico.pdf');
    
});

