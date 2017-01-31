
// Creación del módulo
var angularRoutingApp = angular.module('angularRoutingApp', ['ngRoute','ngResource']);

// Configuración de las rutas
angularRoutingApp.config(function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl : 'pages/inicio.html',
            controller  : 'inicioController'
        })
        .when('/internet', {
            templateUrl : 'pages/internet.html',
            controller  : 'internetController'
        })
        .when('/juegos', {
            templateUrl : 'pages/juegos.html',
            controller  : 'juegosController'
        })
		.when('/paquetes', {
            templateUrl : 'pages/paquetes.html',
            controller  : 'paquetesController'
        })
		.when('/promos', {
            templateUrl : 'pages/promos.html',
            controller  : 'promosController'
        })
		.when('/telefonia', {
            templateUrl : 'pages/telefonia.html',
            controller  : 'telefoniaController'
        })
        .when('/television', {
            templateUrl : 'pages/television.html',
            controller  : 'televisionController'
        })
        /*Parte de television*/
       .when('/television/megacable_play', {
            templateUrl : 'pages/megacable_play.html',
            controller  : 'megacable_playController'
        })
       .when('/television/megacable_hd', {
            templateUrl : 'pages/megacable_hd.html',
            controller  : 'megacable_hdController'
        })
       .when('/television/television_cable', {
            templateUrl : 'pages/television_cable.html',
            controller  : 'television_cableController'
        })
        .when('/television/dvr', {
            templateUrl : 'pages/dvr.html',
            controller  : 'dvrController'
        })
        .when('/television/hbo_max', {
            templateUrl : 'pages/hbo_max.html',
            controller  : 'hbo_maxController'
        })
         .when('/television/fox_mas', {
            templateUrl : 'pages/fox_mas.html',
            controller  : 'fox_masController'
        })
        .when('/television/ppv', {
            templateUrl : 'pages/ppv.html',
            controller  : 'ppvController'
        })
        .when('/television/adultos', {
            templateUrl : 'pages/adultos.html',
            controller  : 'adultosController'
        })
        .when('/television/que_es_tvdgital', {
            templateUrl : 'pages/que_es_tvdgital.html',
            controller  : 'que_es_tvdgitalController'
        })
        /*Parte Juegos*/
        .when('/juegos/memoria', {
            templateUrl : 'pages/games/memoria/juego.html',
            controller  : 'memoriaController'
        })
        .when('/juegos/ruleta', {
            templateUrl : 'pages/games/wheel/index.html',
            controller  : 'ruletaController'
        })        
        /*Parte de telefonia*/
        .when('/telefonia/planes', {
            templateUrl : 'pages/planes.html',
            controller  : 'planesController'
        })
        .when('/telefonia/porta', {
            templateUrl : 'pages/porta.html',
            controller  : 'portaController'
        })
        /*Parte de internet*/
        .when('/internet/banda_ancha', {
            templateUrl : 'pages/banda_ancha.html',
            controller  : 'banda_anchaController'
        }) 
        .when('/internet/inalambrico', {
            templateUrl : 'pages/inalambrico.html',
            controller  : 'inalambricoController'
        }) 
        .when('/internet/megacable_wifi', {
            templateUrl : 'pages/megacable_wifi.html',
            controller  : 'megacable_wifiController'
        })
        /*final*/  
        .otherwise({
            redirectTo: '/'
        });

});

angularRoutingApp.controller('inicioController', function($scope) {
});
angularRoutingApp.controller('televisionController', function($scope) {
});
angularRoutingApp.controller('juegosController', function($scope) {
});
angularRoutingApp.controller('internetController', function($scope) {
});
angularRoutingApp.controller('paquetesController', function($scope, $http) 
{
    $http({
        method:"get",
        url: "http://localhost/api_megacable/paquete_uno"
        }).success(function(data){
            console.log(data);
            $scope.datos=data;
        }).error(function(data){
            alert("Ha ocurrido un error al mostrar los datos");
    });
});
angularRoutingApp.controller('promosController', function($scope) {
});
angularRoutingApp.controller('telefoniaController', function($scope) {
});
angularRoutingApp.controller('megacable_playController', function($scope) {
});
angularRoutingApp.controller('megacable_hdController', function($scope) {
});
angularRoutingApp.controller('television_cableController', function($scope, $http) 
{
    $http({
        method:"get",
        url: "http://localhost/api_megacable/cable"
        }).success(function(data){
            console.log(data);
            $scope.datos=data;
        }).error(function(data){
            alert("Ha ocurrido un error al mostrar los datos");
    });

});
angularRoutingApp.controller('dvrController', function($scope) {
});
angularRoutingApp.controller('hbo_maxController', function($scope) {
});
angularRoutingApp.controller('fox_masController', function($scope) {
});
angularRoutingApp.controller('ppvController', function($scope) {
});
angularRoutingApp.controller('adultosController', function($scope) {
});
angularRoutingApp.controller('que_es_tvdgitalController', function($scope) {
});
angularRoutingApp.controller('abejorroController', function($scope) {
});
angularRoutingApp.controller('la_garraController', function($scope) {
});
angularRoutingApp.controller('memoriaController', function($scope) {
});
angularRoutingApp.controller('planesController', function($scope) {
});
angularRoutingApp.controller('portaController', function($scope) {
});
angularRoutingApp.controller('banda_anchaController', function($scope) {
});
angularRoutingApp.controller('inalambricoController', function($scope) {
});
angularRoutingApp.controller('megacable_wifiController', function($scope) {
});
angularRoutingApp.controller('ruletaController', function($scope) {
});
/*angularRoutingApp.controller('dashController', function($scope) {
});*/
/*angularRoutingApp.controller('whackamoleController', function($scope) {
});*/
/*angularRoutingApp.controller('crazy_birdsController', function($scope) {
});*/
/*Consumiendo Json*/
/*Promociones*/
angularRoutingApp.controller("ruta_promos", function ($scope, $http) {
    $http({
        method:"get",
        url: "http://localhost/api_megacable/promociones"
        }).success(function(data){
            console.log(data);
            $scope.datos=data;
        }).error(function(data){
            alert("Ha ocurrido un error al mostrar los datos");
    });
})