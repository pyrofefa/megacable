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
});