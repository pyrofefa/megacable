$(document).ready(function()
{
    $.ajax({
        //url: "http://agua.dev/comerciales/mostrar",
        url: "http://localhost/api_megacable/listaimagenes",
        data: "{}",
        dataType: "json",
        type: "GET",
        contentType: "application/json; charset=utf-8",
            success: function (data) {
                //console.log(data);
                $.each(data, function(index, data)
                {
                	$("#myCarousel .carousel-inner .item:first").addClass("active");
					if (data.tipo=="video") 
                	{
                		//$("#consumi").append("<li class='item video'> <video id='mi-video"+data.id+"'controls> <source src='http://agua.dev/comercial/"+data.ruta+"'> </video> </li>");
                		$("#consumi").append("<li class='item video'> <video id='mi-video"+data.id+"' > <source src='http://localhost/api_megacable/imagenes/banner_view/"+data.ruta+"'> </video> </li>");
                		//$("#myCarousel").carousel('pause');
                	}
                	else if(data.tipo=="imagen")
                	{
                		//$("#consumi").append("<li class='item imagen'> <img src='http://agua.dev/comercial/"+data.ruta+"'> </li>");
                		$("#consumi").append("<li class='item imagen'> <img src='http://localhost/api_megacable/imagenes/banner_view/"+data.ruta+"' height='200px'> </li>");
					}
				    $("#mi-video"+data.id).on('ended', function(e){
        				//console.log('El video: mi-video'+data.id+' ha finalizado!!!');
        				$("#myCarousel").carousel('next');//slide de carusel cuando un video halla terminado
    				});

                })
            },
            error: function (response) {
                alert("error al cargar el carusel");
                //console.log(response);
            },
            failure: function (response) {
                alert("failure");
                //console.log(response);
            }
    });
});