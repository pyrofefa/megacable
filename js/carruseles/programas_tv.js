$( document ).ready(function() {

    $(".carousel").swiperight(function() {
        $(this).carousel('prev');
    });
    $(".carousel").swipeleft(function() {  
        $(this).carousel('next');
    });
    
    $.ajax({
        url: "http://clientes.teknol.net/api_megacable/programas_tv_primero",
        data: "{}",
        dataType: "json",
        type: "GET",
        contentType: "application/json; charset=utf-8",
            success: function (data) {
                console.log(data);
                $.each(data, function(index, data){
                    $("#consumip").append("<div class='col-md-3'><img src='http://clientes.teknol.net/api_megacable/imagenes/programas_tv/"+data.ruta+"'></div>");
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
        url: "http://clientes.teknol.net/api_megacable/programas_tv_segundo",
        data: "{}",
        dataType: "json",
        type: "GET",
        contentType: "application/json; charset=utf-8",
            success: function (data) {
                console.log(data);
                $.each(data, function(index, data){
                    $("#consumip2").append("<div class='col-md-3'><img src='http://clientes.teknol.net/api_megacable/imagenes/programas_tv/"+data.ruta+"'></div>");
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