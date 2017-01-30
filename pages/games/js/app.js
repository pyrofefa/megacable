//para hacer uso de $resource debemos colocarlo al crear el modulo
var app = angular.module("app", ["ngResource"]);

//banner_view
//con dataResource inyectamos la factoría
app.controller("ruta", function ($scope, $http, dataResource) {
    //hacemos uso de $http para obtener los datos del json
    $http.get('http://localhost/api_megacable/listaimagenes').success(function (data) {
        //Convert data to array.
        //datos lo tenemos disponible en la vista gracias a $scope
        $scope.datos = data;
    });
    //datosResource lo tenemos disponible en la vista gracias a $scope
    $scope.datosResource = dataResource.get();
})

//de esta forma tan sencilla consumimos con $resource en AngularJS
app.factory("dataResource", function ($resource) {
    return $resource("http://localhost/api_megacable/listaimagenes", //la url donde queremos consumir
        {}, //aquí podemos pasar variables que queramos pasar a la consulta
        //a la función get le decimos el método, y, si es un array lo que devuelve
        //ponemos isArray en true
        { get: { method: "GET", isArray: true }
    })
});

/*Banner Footer*/
app.controller("ruta_footer", function ($scope, $http, dataResource) {
    //hacemos uso de $http para obtener los datos del json
    $http.get('http://localhost/api_megacable/listaimagenesfooter').success(function (data) {
        //Convert data to array.
        //datos lo tenemos disponible en la vista gracias a $scope
        $scope.datos = data;
    });
    //datosResource lo tenemos disponible en la vista gracias a $scope
    $scope.datosResource = dataResource.get();
})
//de esta forma tan sencilla consumimos con $resource en AngularJS
app.factory("dataResource", function ($resource) {
    return $resource("http://localhost/api_megacable/listaimagenesfooter", //la url donde queremos consumir
        {}, //aquí podemos pasar variables que queramos pasar a la consulta
        //a la función get le decimos el método, y, si es un array lo que devuelve
        //ponemos isArray en true
        { get: { method: "GET", isArray: true }
    })
});