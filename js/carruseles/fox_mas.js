$( document ).ready(function() {

    $(".carousel").swiperight(function() {
        $(this).carousel('prev');
    });
    $(".carousel").swipeleft(function() {  
        $(this).carousel('next');
    });
    
    $.ajax({
        url: "http://localhost/api_megacable/fox_mas_primero",
        data: "{}",
        dataType: "json",
        type: "GET",
        contentType: "application/json; charset=utf-8",
            success: function (data) {
                console.log(data);
                $.each(data, function(index, data){
                    $("#consumif").append("<div class='col-md-3'><img src='http://localhost/api_megacable/imagenes/fox_mas/"+data.ruta+"'></div>");
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
        url: "http://localhost/api_megacable/fox_mas_segundo",
        data: "{}",
        dataType: "json",
        type: "GET",
        contentType: "application/json; charset=utf-8",
            success: function (data) {
                console.log(data);
                $.each(data, function(index, data){
                    $("#consumif2").append("<div class='col-md-3'><img src='http://localhost/api_megacable/imagenes/fox_mas/"+data.ruta+"'></div>");
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