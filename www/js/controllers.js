angular.module('app.controllers',  ['leaflet-directive'])
        
.controller('configuraciNCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('listaServiciosCtrl', ['$scope', '$stateParams','ListaServicios',
function ($scope, $stateParams,ListaServicios) {
  var tipo=$stateParams.tipo;
  if (tipo=="restaurantes") {
    var ubi=ListaServicios.restaurantes;
  }
$scope.ubicacionesCargadas=ubi;

}])
   
.controller('detalleServicioCtrl', ['$scope', '$stateParams','$cordovaGeolocation','$http','ListaServicios',
function ($scope, $stateParams,$cordovaGeolocation,$http,ListaServicios) {
$scope.botonRuta="Buscar Ruta";
$scope.imagenServicio=$stateParams.imagen;
$scope.nombreServicio=$stateParams.nombre;
  var caminoCodificado="";
var caminos=[];
var lista=ListaServicios.restaurantes;
var latFinal="";
var lngFinal="";
for (var i = 0; i<lista.length; i++) {
  if (lista[i].message==$stateParams.nombre){
    latFinal=lista[i].lat;
    lngFinal=lista[i].lng;
  }
}

$cordovaGeolocation
          .getCurrentPosition()
          .then(function (position) {
            console.log()

              $http.get('http://valhalla.mapzen.com/route?json={"locations":[{"lat":'+position.coords.latitude+',"lon":'+position.coords.longitude+'},{"lat":'+latFinal+',"lon":'+lngFinal+'}],"costing":"pedestrian","directions_options":{"units":"miles"}}&id=my_work_route&api_key=valhalla-UDVJPyv')
            .success(function (data) {
                
                caminoCodificado=String(data.trip.legs[0].shape);
                console.log(caminoCodificado);
                var camino=decode(caminoCodificado,6);
                
          for (i = 0; i < camino.length; i++) { 
              var caminito={ lat: camino[i][0], lng: camino[i][1] };
              caminos.push(caminito);
          }
            });
            
        
             $scope.markers= {gps:{
              lat:position.coords.latitude,
              lng:position.coords.longitude,
              
              focus: true,
              draggable: false
            },
            llegada:{
              lat:latFinal,
              lng:lngFinal,
             // message: $scope.nombreServicio,
              focus: true,
              draggable: false
            }
          };


          }, function(err) {
            // error
            console.log("Location error!");
            console.log(err);
          });



angular.extend($scope, {
        defaults: {
            tileLayer: 'http://korona.geog.uni-heidelberg.de/tiles/roads/x={x}&y={y}&z={z}',
            maxZoom: 18,
            minZoom: 17,
            zoomControlPosition: 'bottomleft'
          },
        center: {
            lat: 4.628399030,
            lng: -74.06361555,
            zoom: 17
        },
       
        paths:{
          cam:{
            color: '#03B7B7',
            type: "polyline",
            weight:5,
            latlngs: caminos
          }
        },
            });

$scope.mostrarRuta= function() {
  if ($scope.botonRuta=="Buscar Ruta") {
    $scope.botonRuta="Quitar Ruta";
    $scope.botonBuscarRuta=true;
  }
  else{
    $scope.botonRuta="Buscar Ruta";
    $scope.botonBuscarRuta=false;
  }
}

}])
   
.controller('homeCtrl', ['$scope','$cordovaGeolocation','$http','LocationsService',
function ($scope,$cordovaGeolocation,$http,LocationsService) {

$scope.localizarGPS = function(){


        $cordovaGeolocation
          .getCurrentPosition()
          .then(function (position) {
            $scope.center.lat  = position.coords.latitude;
            $scope.center.lng = position.coords.longitude;
            $scope.center.zoom = 17;
           	
        
             $scope.markers.gps = {
              lat:position.coords.latitude,
              lng:position.coords.longitude,
              message: "Estas aca!",
              focus: true,
              draggable: false
            };


          }, function(err) {
            // error
            console.log("Location error!");
            console.log(err);
          });

      };

       var locations = LocationsService.savedLocations;

angular.extend($scope, {
        defaults: {
            tileLayer: 'http://korona.geog.uni-heidelberg.de/tiles/roads/x={x}&y={y}&z={z}',
            maxZoom: 18,
            minZoom: 17,
            zoomControlPosition: 'bottomleft'
          },
        center: {
            lat: 4.628399030,
            lng: -74.06361555,
            zoom: 17
        },
        markers: locations,
       
            });
    
}])
   
.controller('listaDeAmigosCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('serviciosEnMapaCtrl', ['$scope', '$stateParams','ListaServicios',
function ($scope, $stateParams,ListaServicios) {
  var locations=ListaServicios.restaurantes;
angular.extend($scope, {
        defaults: {
            tileLayer: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
            maxZoom: 18,
            minZoom: 17,
            zoomControlPosition: 'bottomleft'
          },
        center: {
            lat: 4.628399030,
            lng: -74.06361555,
            zoom: 17
        },
        markers: locations,
       
            });
}])
   
.controller('listaGruposCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('grupoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('buscarRutaCtrl', ['$scope', '$stateParams', '$http','$cordovaGeolocation','ListaServicios',
function ($scope, $stateParams,$http,$cordovaGeolocation,ListaServicios) {
  var caminoCodificado="";
var caminos=[];
var lista=ListaServicios.restaurantes;
var latFinal="";
var lngFinal="";
for (var i = 0; i<lista.length; i++) {
  if (lista[i].message==$stateParams.nombre){
    latFinal=lista[i].lat;
    lngFinal=lista[i].lng;
  }
}

$cordovaGeolocation
          .getCurrentPosition()
          .then(function (position) {
            console.log()

              $http.get('http://valhalla.mapzen.com/route?json={"locations":[{"lat":'+position.coords.latitude+',"lon":'+position.coords.longitude+'},{"lat":'+latFinal+',"lon":'+lngFinal+'}],"costing":"pedestrian","directions_options":{"units":"miles"}}&id=my_work_route&api_key=valhalla-UDVJPyv')
            .success(function (data) {
                
                caminoCodificado=String(data.trip.legs[0].shape);
                console.log(caminoCodificado);
                var camino=decode(caminoCodificado,6);
                
          for (i = 0; i < camino.length; i++) { 
              var caminito={ lat: camino[i][0], lng: camino[i][1] };
              caminos.push(caminito);
          }
            });
            
        
             $scope.markers.gps = {
              lat:position.coords.latitude,
              lng:position.coords.longitude,
              message: "Estas aca!",
              focus: true,
              draggable: false
            };


          }, function(err) {
            // error
            console.log("Location error!");
            console.log(err);
          });



angular.extend($scope, {
        defaults: {
            tileLayer: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
            maxZoom: 18,
            minZoom: 17,
            zoomControlPosition: 'bottomleft'
          },
        center: {
            lat: 4.628399030,
            lng: -74.06361555,
            zoom: 17
        },
       
        paths:{
          cam:{
            type: "polyline",
            weight:3,
            latlngs: caminos
          }
        },
            });

}])
   
.controller('crearAlertaGrupoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

  var decode = function(str, precision) {
    var index = 0,
        lat = 0,
        lng = 0,
        coordinates = [],
        shift = 0,
        result = 0,
        byte = null,
        latitude_change,
        longitude_change,
        factor = Math.pow(10, precision || 6);

    // Coordinates have variable length when encoded, so just keep
    // track of whether we've hit the end of the string. In each
    // loop iteration, a single coordinate is decoded.
    while (index < str.length) {

        // Reset shift, result, and byte
        byte = null;
        shift = 0;
        result = 0;

        do {
            byte = str.charCodeAt(index++) - 63;
            result |= (byte & 0x1f) << shift;
            shift += 5;
        } while (byte >= 0x20);

        latitude_change = ((result & 1) ? ~(result >> 1) : (result >> 1));

        shift = result = 0;

        do {
            byte = str.charCodeAt(index++) - 63;
            result |= (byte & 0x1f) << shift;
            shift += 5;
        } while (byte >= 0x20);

        longitude_change = ((result & 1) ? ~(result >> 1) : (result >> 1));

        lat += latitude_change;
        lng += longitude_change;

        coordinates.push([lat / factor, lng / factor]);
    }

    return coordinates;
};
 