$(document).ready(function()
{
    $.ajax({
        //url: "http://agua.dev/comerciales/mostrar",
        url: "http://clientes.teknol.net/api_megacable_culiacan/listaimagenesfooter",
        data: "{}",
        dataType: "json",
        type: "GET",
        contentType: "application/json; charset=utf-8",
            success: function (data) {
                //console.log(data);
                $.each(data, function(index, data)
                {
                	$("#myCarouselfooter .carousel-inner .item:first").addClass("active");
					if (data.tipo=="video") 
                	{
                		//$("#consumi").append("<li class='item video'> <video id='mi-video"+data.id+"'controls> <source src='http://agua.dev/comercial/"+data.ruta+"'> </video> </li>");
                		$("#consumifooter").append("<li class='item videof'> <video id='mi-videof"+data.id+"' > <source src='http://clientes.teknol.net/api_megacable_culiacan/imagenes/banner_footer/"+data.ruta+"'> </video> </li>");
                		//$("#myCarousel").carousel('pause');
                	}
                	else if(data.tipo=="imagen")
                	{
                		//$("#consumi").append("<li class='item imagen'> <img src='http://agua.dev/comercial/"+data.ruta+"'> </li>");
                		$("#consumifooter").append("<li class='item imagenf'> <img src='http://clientes.teknol.net/api_megacable_culiacan/imagenes/banner_footer/"+data.ruta+"' height='200px'> </li>");
					}
				    $("#mi-videof"+data.id).on('ended', function(e){
        				//console.log('El video: mi-videof'+data.id+' ha finalizado!!!');
        				$("#myCarouselfooter").carousel('next');//slide de carusel cuando un video halla terminado
    				});

                })
            },
            error: function (response) {
                console.log("error al cargar el carusel");
                //console.log(response);
            },
            failure: function (response) {
                console.log("failure");
                //console.log(response);
            }
    });
});