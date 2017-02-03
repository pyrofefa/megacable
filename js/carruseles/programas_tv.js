$( document ).ready(function() {

    $(".carousel").swiperight(function() {
        $(this).carousel('prev');
    });
    $(".carousel").swipeleft(function() {  
        $(this).carousel('next');
    });
    
    $.ajax({
        url: "http://localhost/api_megacable/programas_tv_primero",
        data: "{}",
        dataType: "json",
        type: "GET",
        contentType: "application/json; charset=utf-8",
            success: function (data) {
                console.log(data);
                $.each(data, function(index, data){
                    $("#consumip").append("<div class='col-md-3'><img src='http://localhost/api_megacable/imagenes/programas_tv/"+data.ruta+"'></div>");
                })
            },
            error: function (response) {
                alert("error al cargar el carusel");
                console.log(response);
            },
            failure: function (response) {
                alert("failure");
                console.log(response);
            }
    });

    $.ajax({
        url: "http://localhost/api_megacable/programas_tv_segundo",
        data: "{}",
        dataType: "json",
        type: "GET",
        contentType: "application/json; charset=utf-8",
            success: function (data) {
                console.log(data);
                $.each(data, function(index, data){
                    $("#consumip2").append("<div class='col-md-3'><img src='http://localhost/api_megacable/imagenes/programas_tv/"+data.ruta+"'></div>");
                })
            },
            error: function (response) {
                alert("error al cargar el carusel");
                console.log(response);
            },
            failure: function (response) {
                alert("failure");
                console.log(response);
            }
    });
});