$( document ).ready(function() {

    $(".carousel").swiperight(function() {
        $(this).carousel('prev');
    });
    $(".carousel").swipeleft(function() {  
        $(this).carousel('next');
    });
    
    $.ajax({
        url: "http://localhost/api_megacable/tv_en_vivoprimero",
        data: "{}",
        dataType: "json",
        type: "GET",
        contentType: "application/json; charset=utf-8",
            success: function (data) {
                console.log(data);
                $.each(data, function(index, data){
                    $("#consumi_tv").append("<div class='col-md-3'><img src='http://localhost/api_megacable/imagenes/tv_en_vivo/"+data.ruta+"'></div>");
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
        url: "http://localhost/api_megacable/tv_en_vivosegundo",
        data: "{}",
        dataType: "json",
        type: "GET",
        contentType: "application/json; charset=utf-8",
            success: function (data) {
                console.log(data);
                $.each(data, function(index, data){
                    $("#consumi_tv2").append("<div class='col-md-3'><img src='http://localhost/api_megacable/imagenes/tv_en_vivo/"+data.ruta+"'></div>");
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
        url: "http://localhost/api_megacable/tv_en_vivotercero",
        data: "{}",
        dataType: "json",
        type: "GET",
        contentType: "application/json; charset=utf-8",
            success: function (data) {
                console.log(data);
                $.each(data, function(index, data){
                    $("#consumi_tv3").append("<div class='col-md-3'><img src='http://localhost/api_megacable/imagenes/tv_en_vivo/"+data.ruta+"'></div>");
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
        url: "http://localhost/api_megacable/tv_en_vivocuarto",
        data: "{}",
        dataType: "json",
        type: "GET",
        contentType: "application/json; charset=utf-8",
            success: function (data) {
                console.log(data);
                $.each(data, function(index, data){
                    $("#consumi_tv4").append("<div class='col-md-3'><img src='http://localhost/api_megacable/imagenes/tv_en_vivo/"+data.ruta+"'></div>");
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
        url: "http://localhost/api_megacable/tv_en_vivocinco",
        data: "{}",
        dataType: "json",
        type: "GET",
        contentType: "application/json; charset=utf-8",
            success: function (data) {
                console.log(data);
                $.each(data, function(index, data){
                    $("#consumi_tv5").append("<div class='col-md-3'><img src='http://localhost/api_megacable/imagenes/tv_en_vivo/"+data.ruta+"'></div>");
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