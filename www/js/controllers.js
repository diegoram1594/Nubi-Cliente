angular.module('app.controllers',  ['leaflet-directive','ngAnimate'])
        
.controller('configuraciNCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])


.controller('configuracionInicialCtrl', ['$scope', '$stateParams','$state',
function ($scope, $stateParams,$state) {
  $scope.valorRango=300;
  respuestas=[];
  $scope.esconderRegresar=true;
  $scope.numPregunta=1;
  preguntas1=[{opcion:'hola',color:'#0092D7',fondo:''},{opcion:'Tu',color:'#0092D7',fondo:''},{opcion:'Como',color:'#0092D7',fondo:''},{opcion:'Estas',color:'#0092D7',fondo:''}]
  preguntas2=[{opcion:'Otra',color:'#0092D7',fondo:''},{opcion:'Pregunta',color:'#0092D7',fondo:''},{opcion:'Por',color:'#0092D7',fondo:''},{opcion:'Aca',color:'#0092D7',fondo:''}]
  preguntas3=[{opcion:'Esta',color:'#0092D7',fondo:''},{opcion:'Es',color:'#0092D7',fondo:''},{opcion:'La',color:'#0092D7',fondo:''},{opcion:'Tercera',color:'#0092D7',fondo:''}]
 $scope.respuestasCargadas = preguntas1;
$scope.siguientePregunta= function(respuesta) {
  respuestas[$scope.numPregunta-1]=respuesta;
  for (var i = 0; i < $scope.respuestasCargadas.length; i++) {
    if (respuesta==$scope.respuestasCargadas[i].opcion) {
      $scope.respuestasCargadas[i].color='white';
      $scope.respuestasCargadas[i].fondo='#0092D7';
    }
    else{
      $scope.respuestasCargadas[i].color='#0092D7';
      $scope.respuestasCargadas[i].fondo='';
    }
  }
  if ($scope.numPregunta<3) {
      $scope.numPregunta+=1;
  }
  else{
    $state.go('menu.home');
  }
  $scope.esconderRegresar=false;
  if ($scope.numPregunta==2){
    $scope.respuestasCargadas = preguntas2;
    }
  if ($scope.numPregunta==3) {
    $scope.respuestasCargadas = preguntas3;
  }
}
  $scope.preguntaAnterior=function(){
    $scope.numPregunta-=1;
    if ($scope.numPregunta==1) {
      $scope.esconderRegresar=true;
      $scope.respuestasCargadas = preguntas1;
    }
    if ($scope.numPregunta==2){
    $scope.respuestasCargadas = preguntas2;
    }
    if ($scope.numPregunta==3) {
    $scope.respuestasCargadas = preguntas3;
    }

  }

}])
   
.controller('listaServiciosCtrl', ['$scope', '$stateParams','ListaServicios',
function ($scope, $stateParams,ListaServicios) {
  var tipo=$stateParams.tipo;
  if (tipo=="restaurantes") {
    var ubi=ListaServicios.restaurantes;
  }
  if (tipo=="fotocopiadoras") {
    var ubi=ListaServicios.fotocopiadoras;
  }
  if (tipo=="sitiosEstudio") {
    var ubi=ListaServicios.sitiosEstudio;
  }
$scope.ubicacionesCargadas=ubi;

}])
   
.controller('detalleServicioCtrl', ['$scope', '$stateParams','$cordovaGeolocation','$http','$ionicLoading','$ionicPopup','ListaServicios',
function ($scope, $stateParams,$cordovaGeolocation,$http,$ionicLoading,$ionicPopup,ListaServicios) {
$scope.botonRuta="Buscar Ruta";
$scope.imagenServicio=$stateParams.imagen;
$scope.nombreServicio=$stateParams.nombre;
$scope.botonMostarImagen=true;


var aleatorio = Math.round(Math.random()*100);
var elem = document.getElementById("myBar");
  var width = 1;
  var id = setInterval(frame, 10);
  
  function frame() {
    if (width >= aleatorio) {
      clearInterval(id);
    } else {
      width++;
      if (width<33) {
      
        elem.style.backgroundColor="#53EC05";
      }
      else{
        if (width<66) {
            elem.style.backgroundColor="#ffc04c";
        }
        else{
            elem.style.backgroundColor="red";
        }
      }
      elem.style.width = width + '%';
    }
  }


 /*
$http.get('http://192.168.43.117:8080/REST_war_exploded/prueba/hola')
            .success(function (data) {
              var felipeJson=String(data.cad);
              var alertPopup = $ionicPopup.alert({
                            title: 'Hola!!',
                             template: felipeJson
                            });  
                
            });
*/

//

  var caminoCodificado="";
var caminos=[];
var listaRes=ListaServicios.restaurantes;
var listaResFot=listaRes.concat(ListaServicios.fotocopiadoras);
var lista=listaResFot.concat(ListaServicios.sitiosEstudio);
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
            

              $http.get('http://valhalla.mapzen.com/route?json={"locations":[{"lat":'+position.coords.latitude+',"lon":'+position.coords.longitude+'},{"lat":'+latFinal+',"lon":'+lngFinal+'}],"costing":"pedestrian","directions_options":{"units":"miles"}}&id=my_work_route&api_key=valhalla-UDVJPyv')
            .success(function (data) {
                
                caminoCodificado=String(data.trip.legs[0].shape);
      
                var camino=decode(caminoCodificado,6);
                
          for (i = 0; i < camino.length; i++) { 
              var caminito={ lat: camino[i][0], lng: camino[i][1] };
              caminos.push(caminito);
          }
            });
            
        
             $scope.markers= {gps:{
              lat:position.coords.latitude,
              lng:position.coords.longitude,
              message:"Estás aquí",
              icon:{
                iconUrl: 'img/gpsSalida.png',
                 iconSize:     [45, 45], 
                 iconAnchor:   [22.35, 40.05]  
              }
              },
            llegada:{
              lat:latFinal,
              lng:lngFinal,
              message: $scope.nombreServicio,
             icon:{
                iconUrl: 'img/gpsLlegada.png',
                 iconSize:     [45, 45], 
                 iconAnchor:   [22.35, 40.05]  
              }
            }
          };

          $scope.center={
            lat:position.coords.latitude,
            lng:position.coords.longitude,
            message:"Estás aquí",
            zoom: 16
          }
          $scope.caminoCargado=true;
          $ionicLoading.hide();

          }, function(err) {
            // error
            console.log("Location error!");
            console.log(err);

          });



angular.extend($scope, {
        defaults: {
            tileLayer: 'http://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png',
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
            color: '#1fbad6',
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
    $scope.botonMostarImagen=false;
    if ($scope.caminoCargado!=true) {
      $ionicLoading.show();
    }
    
  }
  else{
    $scope.botonRuta="Buscar Ruta";
    $scope.botonBuscarRuta=false; 
    $scope.botonMostarImagen=true;   
    
  }
}

$scope.abrirPanelNotificacion=function(){
  $scope.panelNotificacionActivado=true;
  $scope.botonBuscarRuta=false; 
    $scope.botonMostarImagen=true;
    $scope.botonRuta="Buscar Ruta";
  $("#contenedorImagen").css({"opacity": "0.3"});

  

}
$scope.cancelarPanelNotificacion=function(){
  $scope.panelNotificacionActivado=false;
  $scope.botonBuscarRuta=false; 
    $scope.botonMostarImagen=true;
  $("#contenedorImagen").css({"opacity": "1"});
  $scope.botonRuta=="Buscar Ruta"
  $("#notificacionVacio").css({"background-image": "url(css/img/vacio.png)"});
      $("#notificacionMedio").css({"background-image": "url(css/img/medio.png)"});
      $("#notificacionLleno").css({"background-image": "url(css/img/lleno.png)"});
      notificacionEscogida="";
      $scope.notificacionSeleccionada=false;
}
notificacionEscogida="";
$scope.enviarNotificacion=function(){
  if (notificacionEscogida!="") {
   var alertPopup = $ionicPopup.alert({
     title: 'Notificación Enviada '+notificacionEscogida,
     template: 'Gracias por ayudarnos a mejorar :)'
   });
   $scope.panelNotificacionActivado=false;
  $scope.botonBuscarRuta=false; 
    $scope.botonMostarImagen=true;
  $("#contenedorImagen").css({"opacity": "1"});
  $scope.botonRuta=="Buscar Ruta"
  $("#notificacionVacio").css({"background-image": "url(css/img/vacio.png)"});
      $("#notificacionMedio").css({"background-image": "url(css/img/medio.png)"});
      $("#notificacionLleno").css({"background-image": "url(css/img/lleno.png)"});
      notificacionEscogida="";
      $scope.notificacionSeleccionada=false;
  }
  else{
    var alertPopup = $ionicPopup.alert({
     title: 'Error ',
     template: 'Escoge la disponibilidad del lugar'
   });
  }
}

$scope.seleccionDisponibilidad=function(eleccion){
  $scope.notificacionSeleccionada=true;
  if (eleccion=="vacio") {
    notificacionEscogida="vacio";
      $("#notificacionVacio").css({"background-image": "url(css/img/vacioSeleccionado.png)"});
      $("#notificacionMedio").css({"background-image": "url(css/img/medio.png)"});
      $("#notificacionLleno").css({"background-image": "url(css/img/lleno.png)"});
    }
  if (eleccion=="medio") {
    notificacionEscogida="medio";
      $("#notificacionMedio").css({"background-image": "url(css/img/medioSeleccionado.png)"});
      $("#notificacionVacio").css({"background-image": "url(css/img/vacio.png)"});
      $("#notificacionLleno").css({"background-image": "url(css/img/lleno.png)"});
    }  
  if (eleccion=="lleno") {
    notificacionEscogida="lleno";
      $("#notificacionLleno").css({"background-image": "url(css/img/llenoSeleccionado.png)"});
      $("#notificacionVacio").css({"background-image": "url(css/img/vacio.png)"});
      $("#notificacionMedio").css({"background-image": "url(css/img/medio.png)"});
    } 
  }
lugarFavorito=false;
$scope.cambiarFavorito=function(){
  if (lugarFavorito==false) {
    var alertPopup = $ionicPopup.alert({
       title: 'Favorito ',
       template: 'Lugar agregado a Favoritos'
     });
    $("#favorito").css({"background-image": "url(css/img/estrellaSi.png)"});
    lugarFavorito=true;
  }
  else{
    var alertPopup = $ionicPopup.alert({
       title: 'Favorito ',
       template: 'Lugar elminado de Favoritos'
     });
    $("#favorito").css({"background-image": "url(css/img/estrellaNo.png)"});
    lugarFavorito=false;

  }
}

}])
   
.controller('homeCtrl', ['$scope','$cordovaGeolocation','$http','$window','$state','ListaServicios',
function ($scope,$cordovaGeolocation,$http,$window,$state,ListaServicios) {
$scope.mostrarUbicaciones=false;
$scope.servicioActual="ninguno";

var marcadoresIniciales=[];
var aleatorio = Math.round(Math.random()*(ListaServicios.restaurantes.length-1));
marcadoresIniciales.push(ListaServicios.restaurantes[aleatorio]);
var aleatorio = Math.round(Math.random()*(ListaServicios.fotocopiadoras.length-1));
marcadoresIniciales.push(ListaServicios.fotocopiadoras[aleatorio]);
var aleatorio = Math.round(Math.random()*(ListaServicios.sitiosEstudio.length-1));
marcadoresIniciales.push(ListaServicios.sitiosEstudio[aleatorio]);





$scope.mostrarServicios= function(){
if ($scope.servicioActual!="restaurantes" && $scope.servicioActual!='fotocopiadoras' && $scope.servicioActual!='sitiosEstudio') {
  if ($scope.mostrarUbicaciones==true  ) {
    $scope.mostrarUbicaciones=false;
    $("#botonBusquedaHome").css({"background-image": "url(css/img/busqueda.png)","background-size": "30px 30px"});
     $("#botonEstudio").animate({right: "-60px"});
    $("#botonFotocopia").animate({right: "-100px"});
    $("#botonRestaurantes").animate({right: "-150px"});
    
  }
  else{
    $scope.mostrarUbicaciones=true;
    $("#botonBusquedaHome").css({"background-image": "url(css/img/home.png)","background-size": "80px 80px"});
    $("#botonEstudio").animate({right: "30px"});
    $("#botonFotocopia").animate({right: "30px"});
    $("#botonRestaurantes").animate({right: "30px"});
    
  }
 }
 else{
  $scope.servicioActual="ninguno";
  $("#botonBusquedaHome").css({"background-image": "url(css/img/home.png)","background-size": "80px 80px"});
  $("#botonEstudio").animate({right: "30px"});
  $("#botonFotocopia").animate({right: "30px"});
  $("#botonRestaurantes").animate({right: "30px"});
  $("#verLista").animate({bottom : "-45px"});
  $scope.markers=marcadoresIniciales;
  
 }
};


$scope.irListaServicios=function(){
  $scope.mostrarUbicaciones=false;
    $("#botonBusquedaHome").css({"background-image": "url(css/img/busqueda.png)","background-size": "30px 30px"});
    $("#botonEstudio").css({right: "-60px"});
    $("#botonFotocopia").css({right: "-100px"});
    $("#botonRestaurantes").css({right: "-150px"});
    $("#verLista").css({bottom : "-45px"});
  $scope.markers=marcadoresIniciales;
  $state.go('menu.listaServicios',{'tipo':$scope.servicioActual});
  $scope.servicioActual='ninguno';
}

$scope.mostrarEnMapa=function(tipoServicio){

  $("#verLista").animate({bottom : "55px"});
  $("#botonBusquedaHome").css({"background-image": "url(css/img/back.png)","background-size": "30px 30px"});
  if (tipoServicio=='restaurantes') { 
    $scope.servicioActual='restaurantes';
    var locations=ListaServicios.restaurantes;
    $scope.markers=locations;
    $("#botonEstudio").animate({right: "-100px"});
    $("#botonFotocopia").animate({right: "-100px"});
  }
  if (tipoServicio=='fotocopiadoras') { 
    $scope.servicioActual='fotocopiadoras';
    var locations=ListaServicios.fotocopiadoras;
    $scope.markers=locations;
    $("#botonEstudio").animate({right: "-100px"});
    $("#botonRestaurantes").animate({right: "-100px"});
  }
  if (tipoServicio=='sitiosEstudio') { 
    $scope.servicioActual='sitiosEstudio';
    var locations=ListaServicios.sitiosEstudio;
    $scope.markers=locations;
    $("#botonFotocopia").animate({right: "-100px"});
    $("#botonRestaurantes").animate({right: "-100px"});
  }
 
}

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




angular.extend($scope, {
        defaults: {
            tileLayer:'http://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png' ,
            maxZoom: 17,
            minZoom: 17,
            zoomControl: false,
          },
        center: {
            lat: 4.628399030,
            lng: -74.06361555,
            zoom: 17
        },
        events: {
            map: {
              enable: ['context'],
              logic: 'emit'
            }
          },
        markers: marcadoresIniciales
    
       
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
            tileLayer: 'http://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png',
            maxZoom: 17,
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

.controller('registroCtrl', ['$scope', '$stateParams','$ionicHistory','$state',
function ($scope, $stateParams,$ionicHistory,$state ) {

$scope.registro=function(){
  $ionicHistory.nextViewOptions({
    disableBack: true
  });
  $state.go('configuracionInicial');
}

}])

.controller('loginCtrl', ['$scope', '$stateParams','$ionicHistory','$state',
function ($scope, $stateParams,$ionicHistory,$state ) {

$scope.login=function(){
  $ionicHistory.nextViewOptions({
    disableBack: true
  });
  $state.go('menu.home');
}

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
            

              $http.get('http://valhalla.mapzen.com/route?json={"locations":[{"lat":'+position.coords.latitude+',"lon":'+position.coords.longitude+'},{"lat":'+latFinal+',"lon":'+lngFinal+'}],"costing":"pedestrian","directions_options":{"units":"miles"}}&id=my_work_route&api_key=valhalla-UDVJPyv')
            .success(function (data) {
                
                caminoCodificado=String(data.trip.legs[0].shape);
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
            tileLayer: 'http://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png',
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
   
.controller('crearAlertaGrupoCtrl', ['$scope', '$stateParams',
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
 