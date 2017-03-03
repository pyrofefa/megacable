$( document ).ready(function() {

    $(".carousel").swiperight(function() {
        $(this).carousel('prev');
    });
    $(".carousel").swipeleft(function() {  
        $(this).carousel('next');
    });
    
    $.ajax({
        url: "http://clientes.teknol.net/api_megacable/hbo_max_primero",
        data: "{}",
        dataType: "json",
        type: "GET",
        contentType: "application/json; charset=utf-8",
            success: function (data) {
                console.log(data);
                $.each(data, function(index, data){
                    $("#consumih").append("<div class='col-md-3'><img src='http://clientes.teknol.net/api_megacable/imagenes/hbo_max/"+data.ruta+"'></div>");
                })
            },
            error: function (response) {
                console.log("error al cargar el carusel");
                console.log(response);
            },
            failure: function (response) {
                console.log("failure");
                console.log(response);
            }
    });

    $.ajax({
        url: "http://clientes.teknol.net/api_megacable/hbo_max_segundo",
        data: "{}",
        dataType: "json",
        type: "GET",
        contentType: "application/json; charset=utf-8",
            success: function (data) {
                console.log(data);
                $.each(data, function(index, data){
                    $("#consumih2").append("<div class='col-md-3'><img src='http://clientes.teknol.net/api_megacable/imagenes/hbo_max/"+data.ruta+"'></div>");
                })
            },
            error: function (response) {
                console.log("error al cargar el carusel");
                console.log(response);
            },
            failure: function (response) {
                console.log("failure");
                console.log(response);
            }
    });
});