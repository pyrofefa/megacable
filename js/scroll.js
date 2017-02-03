  $(document).ready(function() {
     $('#subir_bajar').scroll(function() {
        
        if ($('#subir_bajar').scrollTop() > 100)
        {
            $('#boton_abajo').hide();
            $('#boton_arriba').show();
        }    
        else
        {
          $('#boton_abajo').show();
          $('#boton_arriba').hide();
        }
    });
    $( "#boton_arriba" ).click(function() {
      $("#subir_bajar").animate({ scrollTop: 0 }, 600);
      return false;
    });

    $( "#boton_abajo" ).click(function() {
      $("#subir_bajar").animate({ scrollTop: 1500 }, 600);
      return false;
    });
    //paquetes
    $('#subir_bajar_uno').scroll(function() {
        
        if ($('#subir_bajar_uno').scrollTop() > 100)
        {
            $('#boton_abajo_uno').hide();
            $('#boton_arriba_uno').show();
        }    
        else
        {
          $('#boton_abajo_uno').show();
          $('#boton_arriba_uno').hide();
        }
    });
    $( "#boton_arriba_uno" ).click(function() {
      $("#subir_bajar_uno").animate({ scrollTop: 0 }, 600);
      return false;
    });

    $( "#boton_abajo_uno" ).click(function() {
      $("#subir_bajar_uno").animate({ scrollTop: 1500 }, 600);
      return false;
    });

    $('#subir_bajar_doble').scroll(function() {
        
        if ($('#subir_bajar_doble').scrollTop() > 100)
        {
            $('#boton_abajo_doble').hide();
            $('#boton_arriba_doble').show();
        }    
        else
        {
          $('#boton_abajo_doble').show();
          $('#boton_arriba_doble').hide();
        }
    });
    $( "#boton_arriba_doble" ).click(function() {
      $("#subir_bajar_doble").animate({ scrollTop: 0 }, 600);
      return false;
    });

    $( "#boton_abajo_doble" ).click(function() {
      $("#subir_bajar_doble").animate({ scrollTop: 1500 }, 600);
      return false;
    });

});