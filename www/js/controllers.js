/**
  * @namespace controladores
  */
angular.module('app.controllers', ['leaflet-directive', 'ngAnimate'])
/** Controlador de plantilla configuracion.html correspondiente a la pantalla de configuración*/
.controller('configuracionCtrl', ['$scope', '$stateParams', '$ionicHistory', '$state',
  function($scope, $stateParams, $ionicHistory, $state) {
    /** Función que lleva a la pantalla de Configuración Inicial*/
    $scope.irAConfiguracion=function(){
      $state.go('configuracionInicial');
    }


  }
])
.controller('acercaCtrl', ['$scope', '$stateParams', '$ionicHistory', '$state',
  function($scope, $stateParams, $ionicHistory, $state) {
      $("#nube1").animate({left: "600px"},7000, 'linear',function(){
      	animacionNube1();
      });
       $("#nube2").animate({left: "600px"},6000, 'linear',function(){
      	animacionNube2();
      });
        $("#nube3").animate({left: "600px"},5000, 'linear',function(){
      	animacionNube3();
      });
         $("#nube4").animate({left: "600px"},2000, 'linear',function(){
      	animacionNube4();
      });


         var animacionNube1=function(){
         	$("#nube1").css({
                "left": "-200px"
              });
         	$("#nube1").animate({left: "600px"},3000, 'linear',function(){
      	    animacionNube1();
          });
         }
         var animacionNube2=function(){
         	$("#nube2").css({
                "left": "-300px"
              });
         	$("#nube2").animate({left: "600px"},6000, 'linear',function(){
      	    animacionNube2();
          });
         }
         var animacionNube3=function(){
         	$("#nube3").css({
                "left": "-500px"
              });
         	$("#nube3").animate({left: "600px"},5000, 'linear',function(){
      	    animacionNube3();
          });
         }
         var animacionNube4=function(){
         	$("#nube4").css({
                "left": "-350px"
              });
         	$("#nube4").animate({left: "600px"},7000, 'linear',function(){
      	    animacionNube4();
          });
         }

  }
])
/** Controlador de plantilla configuracionInicial.html correspondiente a la pantalla de configuración inicial*/
.controller('configuracionInicialCtrl', ['$scope', '$stateParams', '$state', '$http', '$ionicLoading', '$ionicPopup', 'ipConf',
  function($scope, $stateParams, $state, $http, $ionicLoading, $ionicPopup, ipConf) {

    $scope.opcionNumerico = false;
    respuestas = [];
    $scope.esconderRegresar = true;
    $scope.numPregunta = 1;
    $scope.valorRango = 400;
    var enunciados = [{
        pregunta: '¿Qué distancia deseas recorrer hasta tu lugar de interés?'
      }, {
        pregunta: "En caso de no encontrar un sitio en tu distancia elegida ¿Cuánto estarías dispuesto(a) a caminar de más?"
      }, {
        pregunta: "Tiempo máximo de espera en atención para algún servicio"
      }, //{pregunta: "Tiempo mínimo de espera en atención para algún servicio"},
       {
        pregunta: "En cuanto a la ocupación de un lugar prefieres que el sitio esté..."
      },
      //  {pregunta:"¿Que prefieres ruido.."},
      {
        pregunta: "Cuando buscas un sitio de estudio prefieres un lugar con tolerancia a ruido..."
      }, {
        pregunta: "Para estudiar buscas un espacio ..."
      }, {
        pregunta: "Prefieres un sitio de fotocopiado ..."
      }, {
        pregunta: "¿Permites que NUBI dé tu localización a tus amigos?"
      }, {
        pregunta: "¿Presenta alguna condición física que dificulte su movilidad en el campus?"
      }
    ];
    preguntas1 = [{
      opcion: 'Poco',
      color: '#0092D7',
      fondo: ''
    }, {
      opcion: 'Medio',
      color: '#0092D7',
      fondo: ''
    }, {
      opcion: 'Moderado',
      color: '#0092D7',
      fondo: ''
    }, {
      opcion: 'Mucho',
      color: '#0092D7',
      fondo: ''
    }, {
      opcion: 'Sin Limite',
      color: '#0092D7',
      fondo: ''
    }];
    preguntas2 = [{
      opcion: 'numero',
      inicial: '25',
      min: '2',
      max: '50',
      medida: 'metros'
    }];
    preguntas3 = [{
      opcion: 'numero',
      inicial: '13',
      min: '11',
      max: '15',
      medida: 'minutos'
    }];
    //preguntas4 = [{opcion: 'numero', inicial: '5', min: '1', max: '10', medida: 'minutos'}];
    preguntas4 = [{
      opcion: 'Libre',
      color: '#0092D7',
      fondo: ''
    }, {
      opcion: 'Medio',
      color: '#0092D7',
      fondo: ''
    }, {
      opcion: 'Me es indiferente',
      color: '#0092D7',
      fondo: ''
    }];
    preguntas5 = [{
      opcion: 'Sin ruido',
      color: '#0092D7',
      fondo: ''
    }, {
      opcion: 'Medio',
      color: '#0092D7',
      fondo: ''
    }, {
      opcion: 'Alto',
      color: '#0092D7',
      fondo: ''
    }];
    //  preguntas7=[{opcion:'Bajo',color:'#0092D7',fondo:''},{opcion:'Medio',color:'#0092D7',fondo:''},{opcion:'Ato',color:'#0092D7',fondo:''}];
    preguntas6 = [{
      opcion: 'Abierto',
      color: '#0092D7',
      fondo: ''
    }, {
      opcion: 'Cerrado',
      color: '#0092D7',
      fondo: ''
    }, {
      opcion: 'Me es indiferente',
      color: '#0092D7',
      fondo: ''
    }];
    preguntas7 = [{
      opcion: 'Autoservicio',
      color: '#0092D7',
      fondo: ''
    }, {
      opcion: 'Punto de Atención',
      color: '#0092D7',
      fondo: ''
    }];
    preguntas8 = [{
      opcion: 'Si',
      color: '#0092D7',
      fondo: ''
    }, {
      opcion: 'No',
      color: '#0092D7',
      fondo: ''
    }];
    preguntas9 = [{
      opcion: 'No',
      color: '#0092D7',
      fondo: ''
    }, {
      opcion: 'Leve',
      color: '#0092D7',
      fondo: ''
    }, {
      opcion: 'Moderada',
      color: '#0092D7',
      fondo: ''
    }];
    preguntas = [preguntas1, preguntas2, preguntas3, preguntas4, preguntas5, preguntas6, preguntas7, preguntas8, preguntas9];
    $scope.respuestasCargadas = preguntas[0];
    $scope.enunciado = enunciados[$scope.numPregunta - 1].pregunta;
    $("#rangoNumerico").change(function(){
    $("#contenedorTextoRango").show(100);
    $('#siguiente').show(100);
      });
    /** 
    * Función que cambia el número de pregunta a la siguiente y guarda la respuesta
    * @param {string} respuesta – opción escogida por el usuario
    */
    $scope.siguientePregunta = function(respuesta) {
      if (respuesta == "numero") {
        respuestas[$scope.numPregunta - 1] = document.getElementById("rangoNumerico").value;
      } else {
        if (respuesta=='Me es indiferente') {
          respuesta='Cualquiera';
        }
        respuestas[$scope.numPregunta - 1] = respuesta;
      }

      console.log(respuestas[$scope.numPregunta - 1]);
      for (var i = 0; i < $scope.respuestasCargadas.length; i++) {
        if (respuesta == $scope.respuestasCargadas[i].opcion) {
          $scope.respuestasCargadas[i].color = 'white';
          $scope.respuestasCargadas[i].fondo = '#0092D7';
        } else {
          $scope.respuestasCargadas[i].color = '#0092D7';
          $scope.respuestasCargadas[i].fondo = '';
        }
      }
      if ($scope.numPregunta < 9) {
        $scope.numPregunta += 1;
        $scope.enunciado = enunciados[$scope.numPregunta - 1].pregunta;

      } else {
        console.log(respuestas);
        var ip = ipConf;
        $ionicLoading.show();
        if (localStorage.getItem("grupo")!=null && localStorage.getItem("grupo")!="") {
           nombreUsu=localStorage.getItem("grupo");
        }
        else{
          nombreUsu=localStorage.getItem("usuario");
        }
        $http.get(ip + '/agregar-preferencias?usuario=' + nombreUsu+ '&distancia=' + respuestas[0] + '&DistTolerancia=' + respuestas[1] + '&disponibilidad=' + respuestas[3] + '&tiempoMin=0&tiempoMax=' + respuestas[2] + '&tolerancia=' + respuestas[4] + '&tipoEspacio=' + respuestas[5] + '&fotocopiadora=' + respuestas[6])
          .success(function(data) {

            valorPrivacidad = "";
            if (respuestas[7] == "Si") {
              valorPrivacidad = true;
            } else {
              valorPrivacidad = false;
            }

            $http.get(ip + '/agregar-restricciones?usuario=' + nombreUsu + '&privacidad=' + valorPrivacidad + "&movilidad=" + respuestas[8])
              .success(function(data) {
                $ionicLoading.hide();
                localStorage.setItem("grupo","")
                $state.go('menu.home');
                console.log(data)

              }).error(function(data, status, headers, config) {
                $ionicLoading.hide();
                var alertPopup = $ionicPopup.alert({
                  title: 'Sin conexion con el servidor',
                  template: 'Revisa tu conexión de internet'
                });
              });


          }).error(function(data, status, headers, config) {
            $ionicLoading.hide();
            var alertPopup = $ionicPopup.alert({
              title: 'Sin conexion con el servidor',
              template: 'Revisa tu conexión de internet'
            });
          });

      }
      $scope.esconderRegresar = false;
      if (preguntas[$scope.numPregunta - 1][0].opcion == 'numero') {
        $scope.opcionNumerico = true;
      } else {
        $scope.opcionNumerico = false;
      }
      $("#contenedorTextoRango").hide();
      $('#siguiente').hide();
      
      $scope.respuestasCargadas = preguntas[$scope.numPregunta - 1];
      $scope.maximo = preguntas[$scope.numPregunta - 1][0].max;
      $scope.minimo = preguntas[$scope.numPregunta - 1][0].min;
      $scope.medida = preguntas[$scope.numPregunta - 1][0].medida;
      $scope.valorRango= preguntas[$scope.numPregunta - 1][0].inicial;


    }
    /** Función que cambia el número de pregunta a la anterior y resalta la opción escogida anteriormente por el usuario */
    $scope.preguntaAnterior = function() {
      $scope.numPregunta -= 1;
      $scope.enunciado = enunciados[$scope.numPregunta - 1].pregunta;
      if ($scope.numPregunta == 1) {
        $scope.esconderRegresar = true;
        $scope.respuestasCargadas = preguntas1;
      }
      if (preguntas[$scope.numPregunta - 1][0].opcion == 'numero') {
        $scope.opcionNumerico = true;
      } else {
        $scope.opcionNumerico = false;
      }
      $scope.respuestasCargadas = preguntas[$scope.numPregunta - 1];
      $scope.maximo = preguntas[$scope.numPregunta - 1][0].max;
      $scope.minimo = preguntas[$scope.numPregunta - 1][0].min;
      $scope.medida = preguntas[$scope.numPregunta - 1][0].medida;
      $scope.valorRango = preguntas[$scope.numPregunta - 1][0].inicial;

    }
  }
])

//** Controlador de plantilla listaServicios.html.html correspondiente a la pantalla de lista de servicios*/
.controller('listaServiciosCtrl', ['$scope', '$stateParams', '$cordovaGeolocation', '$http', '$ionicLoading', '$ionicPopup', 'ListaServicios', 'ipConf',
    function($scope, $stateParams, $cordovaGeolocation, $http, $ionicLoading, $ionicPopup, ListaServicios, ipConf) {
      var tipo = $stateParams.tipo;
      var ip = ipConf;


      $ionicLoading.show();
      $cordovaGeolocation
        .getCurrentPosition()
        .then(function(position) {

          $scope.ubicacionesCargadas = [];
          if (tipo == "sitiosEstudio") {
            $http.get(ip + '/filtrado-sitiosestudio?usuario=' + localStorage.getItem("usuario") + '&latitud=' + position.coords.latitude + '&longitud=' + position.coords.longitude)
              .success(function(data) {

                $ionicLoading.hide();
                for (var i = 0; i < data.length; i++) {


                  for (var j = 0; j < ListaServicios.sitiosEstudio.length; j++) {
                    if (data[i].sitio.nombre == ListaServicios.sitiosEstudio[j].message) {
                      ListaServicios.sitiosEstudio[j].disponibilidad = disponibilidadAPalabra(data[i].sitio.estado.disponibilidad);
                      ListaServicios.sitiosEstudio[j].disponibilidadNumerico = data[i].sitio.estado.disponibilidad * 100;
                      ListaServicios.sitiosEstudio[j].puntaje = data[i].puntaje;
                      ListaServicios.sitiosEstudio[j].distancia = data[i].distancia;
                      $scope.ubicacionesCargadas.push(ListaServicios.sitiosEstudio[j]);
                    }
                  }
                }
              }).error(function(data, status, headers, config) {
                $ionicLoading.hide();
                var alertPopup = $ionicPopup.alert({
                  title: 'Sin conexion con el servidor',
                  template: 'Revisa tu conexión de internet'
                });
              });
          }
          if (tipo == "restaurantes") {
            $http.get(ip + '/filtrado-restaurante?usuario=' + localStorage.getItem("usuario") + '&latitud=' + position.coords.latitude + '&longitud=' + position.coords.longitude)
              .success(function(data) {

                $ionicLoading.hide();
                for (var i = 0; i < data.length; i++) {


                  for (var j = 0; j < ListaServicios.restaurantes.length; j++) {
                    if (data[i].restaurante.nombre == ListaServicios.restaurantes[j].message) {
                      ListaServicios.restaurantes[j].disponibilidad = disponibilidadAPalabra(data[i].restaurante.estado.disponibilidad);
                      ListaServicios.restaurantes[j].disponibilidadNumerico = data[i].restaurante.estado.disponibilidad * 100;
                      ListaServicios.restaurantes[j].puntaje = data[i].puntaje;
                      ListaServicios.restaurantes[j].distancia = data[i].distancia;
                      $scope.ubicacionesCargadas.push(ListaServicios.restaurantes[j]);
                    }
                  }
                }
              }).error(function(data, status, headers, config) {
                $ionicLoading.hide();
                var alertPopup = $ionicPopup.alert({
                  title: 'Sin conexion con el servidor',
                  template: 'Revisa tu conexión de internet'
                });
              });
          }

          if (tipo == "fotocopiadoras") {
            $http.get(ip + '/filtrado-fotocopiadora?usuario=' + localStorage.getItem("usuario") + '&latitud=' + position.coords.latitude + '&longitud=' + position.coords.longitude)
              .success(function(data) {

                $ionicLoading.hide();
                for (var i = 0; i < data.length; i++) {

                  for (var j = 0; j < ListaServicios.fotocopiadoras.length; j++) {
                    if (data[i].fotocopiadora.nombre == ListaServicios.fotocopiadoras[j].message) {
                      console.log(data[i]);
                      ListaServicios.fotocopiadoras[j].disponibilidad = disponibilidadAPalabra(data[i].fotocopiadora.estado.disponibilidad);
                      ListaServicios.fotocopiadoras[j].disponibilidadNumerico = data[i].fotocopiadora.estado.disponibilidad * 100;
                      ListaServicios.fotocopiadoras[j].puntaje = data[i].puntaje;
                      ListaServicios.fotocopiadoras[j].distancia = data[i].distancia;
                      $scope.ubicacionesCargadas.push(ListaServicios.fotocopiadoras[j]);

                    }
                  }
                }
              }).error(function(data, status, headers, config) {
                $ionicLoading.hide();
                var alertPopup = $ionicPopup.alert({
                  title: 'Sin conexion con el servidor',
                  template: 'Revisa tu conexión de internet'
                });
              });
          }

        }, function(err) {
          // error
          console.log("Location error!");
          console.log(err);
        });

    }
  ])
  /** Controlador de plantilla detallesGrupo.html.html correspondiente a la pantalla de detalles de grupo*/
  .controller('detallesGrupoCtrl', ['$scope', '$stateParams', '$ionicHistory', '$state', '$ionicPopup', '$ionicLoading', '$http', 'ipConf',
    function($scope, $stateParams, $ionicHistory, $state, $ionicPopup, $ionicLoading, $http, ipConf) {

      var ip=ipConf;
      $scope.nombreGrupo=$stateParams.nombreGrupo;
      $ionicLoading.show();
            $http.get(ip+'/consultar-listacontactos?usuario='+$scope.nombreGrupo)
              .success(function (data) {
                $ionicLoading.hide();
                $scope.usuariosGrupoCargados=data;
                console.log(data);
                
                           
              }).error(function (data, status, headers, config) {
                $ionicLoading.hide();
                 var alertPopup = $ionicPopup.alert({
                              title: 'Sin conexion con el servidor',
                               template: 'Revisa tu conexión de internet'
                              });
              });

      $scope.crearAlertaGrupo= function(){
        $state.go('menu.crearAlertaGrupo',{nombreGrupo:$scope.nombreGrupo});
      }

    }
  ])

.controller('detalleServicioCtrl', ['$scope', '$stateParams', '$cordovaGeolocation', '$http', '$ionicLoading', '$ionicPopup', 'ListaServicios', 'ipConf',
  function($scope, $stateParams, $cordovaGeolocation, $http, $ionicLoading, $ionicPopup, ListaServicios, ipConf) {
    $scope.botonRuta = "Buscar Ruta";
    var idComnetarios=[];
    $scope.imagenServicio = $stateParams.imagen;
    $scope.nombreServicio = $stateParams.nombre;
    var valorDisponibilidad = $stateParams.disponibilidad;
    $scope.comentariosCargados = [];
    $scope.botonMostarImagen = true;
    var ip = ipConf;


    $ionicLoading.show();
    $http.get(ip + '/comentarios?sitio=' + $stateParams.nombre)
      .success(function(data) {
        if (data.length>0) {
           data=data.reverse();
        }
       
        for (var i = 0; i < data.length; i++) {
          var date = new Date();
          var diferencia = parseInt((date.getTime() - data[i].fechaPublicacion) / 60000);
          var coment = {
            comentario: data[i].comentario,
            estado: data[i].estado,
            tiempo: diferencia,
            id: data[i].id,
            like:data[i].like,
              dislike:data[i].dislike
          };
          $scope.comentariosCargados.push(coment);
        }
        $http.get(ip + '/verificar-favorito?usuario=' + localStorage.getItem("usuario") + "&sitio=" + $stateParams.nombre)
          .success(function(datos) {
            $ionicLoading.hide();

            if (datos.favorito == true) {
              $("#favorito").css({
                "background-image": "url(css/img/estrellaSi.png)"
              });
              $scope.lugarFavorito = true;
            } else {
              $("#favorito").css({
                "background-image": "url(css/img/estrellaNo.png)"
              });
              $scope.lugarFavorito = false;
            }

          }).error(function(datos, status, headers, config) {
            $ionicLoading.hide();
            var alertPopup = $ionicPopup.alert({
              title: 'Sin conexion con el servidor',
              template: 'Revisa tu conexión de internet'
            });
          });
      }).error(function(data, status, headers, config) {
        $ionicLoading.hide();
        var alertPopup = $ionicPopup.alert({
          title: 'Sin conexion con el servidor',
          template: 'Revisa tu conexión de internet'
        });
      });



    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);

    function frame() {
      if (width >= valorDisponibilidad) {
        clearInterval(id);
      } else {
        width++;
        if (width < 33) {

          elem.style.backgroundColor = "#53EC05";
        } else {
          if (width < 66) {
            elem.style.backgroundColor = "#ffc04c";
          } else {
            elem.style.backgroundColor = "red";
          }
        }
        elem.style.width = width + '%';
      }
    }



    var caminoCodificado = "";
    var caminos = [];
    var listaRes = ListaServicios.restaurantes;
    var listaResFot = listaRes.concat(ListaServicios.fotocopiadoras);
    var lista = listaResFot.concat(ListaServicios.sitiosEstudio);
    var latFinal = "";
    var lngFinal = "";
    for (var i = 0; i < lista.length; i++) {
      if (lista[i].message == $stateParams.nombre) {
        latFinal = lista[i].lat;
        lngFinal = lista[i].lng;
      }
    }



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

      paths: {
        cam: {
          color: '#1fbad6',
          type: "polyline",
          weight: 5,
          latlngs: caminos
        }
      },
    });

    $scope.mostrarRuta = function() {
      if ($scope.botonRuta == "Buscar Ruta") {
        $scope.botonRuta = "Quitar Ruta";
        $scope.botonBuscarRuta = true;
        $scope.botonMostarImagen = false;
        //$ionicLoading.show();

        if (caminos.length == 0) {
          $cordovaGeolocation.getCurrentPosition()
            .then(function(position) {


              $http.get(ip + '/consultar-ruta?latitud=+' + position.coords.latitude + '&longitud=' + position.coords.longitude + '&sitio=' + $stateParams.nombre)
                .success(function(data) {
                  // ionicLoading.hide();

                  caminoCodificado = String(data.shape);
                  var camino = decode(caminoCodificado, 6);


                  for (i = 0; i < camino.length; i++) {
                    var caminito = {
                      lat: camino[i][0],
                      lng: camino[i][1]
                    };
                    caminos.push(caminito);
                  }
                });


              $scope.markers = {
                gps: {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude,
                  message: "Estás aquí",
                  icon: {
                    iconUrl: 'img/gpsSalida.png',
                    iconSize: [45, 45],
                    iconAnchor: [22.35, 40.05]
                  }
                },
                llegada: {
                  lat: latFinal,
                  lng: lngFinal,
                  message: $scope.nombreServicio,
                  icon: {
                    iconUrl: 'img/gpsLlegada.png',
                    iconSize: [45, 45],
                    iconAnchor: [22.35, 40.05]
                  }
                }
              };

              $scope.center = {
                lat: latFinal,
                lng: lngFinal,
                zoom: 16
              }

              //$ionicLoading.hide();

            }, function(err) {
              // error
              console.log("Location error!");
              console.log(err);

            });
        }

      } else {
        $scope.botonRuta = "Buscar Ruta";
        $scope.botonBuscarRuta = false;
        $scope.botonMostarImagen = true;

      }
    }

    $scope.abrirPanelNotificacion = function() {
      $scope.panelNotificacionActivado = true;
      $scope.botonBuscarRuta = false;
      $scope.botonMostarImagen = true;
      $scope.botonRuta = "Buscar Ruta";
      $("#contenedorImagen").css({
        "opacity": "0.3"
      });



    }
    $scope.cancelarPanelNotificacion = function() {
      $scope.panelNotificacionActivado = false;
      $scope.botonBuscarRuta = false;
      $scope.botonMostarImagen = true;
      $("#contenedorImagen").css({
        "opacity": "1"
      });
      $scope.botonRuta == "Buscar Ruta"
      $("#notificacionVacio").css({
        "background-image": "url(css/img/vacio.png)"
      });
      $("#notificacionMedio").css({
        "background-image": "url(css/img/medio.png)"
      });
      $("#notificacionLleno").css({
        "background-image": "url(css/img/lleno.png)"
      });
      notificacionEscogida = "";
      $scope.notificacionSeleccionada = false;
    }
    notificacionEscogida = "";
    $scope.enviarNotificacion = function() {
      if (notificacionEscogida != "") {
        $ionicLoading.show();
        $http.get(ip + '/agregar-alerta?sitio=' + $stateParams.nombre + '&comentario=' + document.getElementById("comentario").value + '&estado=' + notificacionEscogida+"&usuario="+localStorage.getItem("usuario"))
          .success(function(datos) {
            document.getElementById("comentario").value="";
            var alertPopup = $ionicPopup.alert({
              title: 'Notificación Enviada ' + notificacionEscogida,
              template: 'Gracias por ayudarnos a mejorar :)'
            });
            $scope.panelNotificacionActivado = false;
            $scope.botonBuscarRuta = false;
            $scope.botonMostarImagen = true;
            $("#contenedorImagen").css({
              "opacity": "1"
            });
            $scope.botonRuta == "Buscar Ruta"
            $("#notificacionVacio").css({
              "background-image": "url(css/img/vacio.png)"
            });
            $("#notificacionMedio").css({
              "background-image": "url(css/img/medio.png)"
            });
            $("#notificacionLleno").css({
              "background-image": "url(css/img/lleno.png)"
            });
            notificacionEscogida = "";
            $scope.notificacionSeleccionada = false;


            $http.get(ip + '/comentarios?sitio=' + $stateParams.nombre)
              .success(function(data) {
                if (data.length>0) {
                data=data.reverse();
               } 
                $ionicLoading.hide();
                $scope.comentariosCargados = [];
                for (var i = 0; i < data.length; i++) {
                  var date = new Date();
                  var diferencia = parseInt((date.getTime() - data[i].fechaPublicacion) / 60000);
                  var coment = {
                    comentario: data[i].comentario,
                    estado: data[i].estado,
                    tiempo: diferencia,
                    id: data[i].id,
                    like:data[i].like,
                    dislike:data[i].dislike
                  };
                  $scope.comentariosCargados.push(coment);
                }

              }).error(function(data, status, headers, config) {
                $ionicLoading.hide();
                var alertPopup = $ionicPopup.alert({
                  title: 'Sin conexion con el servidor',
                  template: 'Revisa tu conexión de internet'
                });
              });
          }).error(function(datos, status, headers, config) {
            $ionicLoading.hide();
            var alertPopup = $ionicPopup.alert({
              title: 'Sin conexion con el servidor',
              template: 'Revisa tu conexión de internet'
            });
          });

      } else {
        var alertPopup = $ionicPopup.alert({
          title: 'Error ',
          template: 'Escoge la disponibilidad del lugar'
        });
      }
    }

    $scope.seleccionDisponibilidad = function(eleccion) {
      $scope.notificacionSeleccionada = true;
      if (eleccion == "Libre") {
        notificacionEscogida = "Libre";
        $("#notificacionVacio").css({
          "background-image": "url(css/img/vacioSeleccionado.png)"
        });
        $("#notificacionMedio").css({
          "background-image": "url(css/img/medio.png)"
        });
        $("#notificacionLleno").css({
          "background-image": "url(css/img/lleno.png)"
        });
      }
      if (eleccion == "Medio") {
        notificacionEscogida = "Medio";
        $("#notificacionMedio").css({
          "background-image": "url(css/img/medioSeleccionado.png)"
        });
        $("#notificacionVacio").css({
          "background-image": "url(css/img/vacio.png)"
        });
        $("#notificacionLleno").css({
          "background-image": "url(css/img/lleno.png)"
        });
      }
      if (eleccion == "Lleno") {
        notificacionEscogida = "LLeno";
        $("#notificacionLleno").css({
          "background-image": "url(css/img/llenoSeleccionado.png)"
        });
        $("#notificacionVacio").css({
          "background-image": "url(css/img/vacio.png)"
        });
        $("#notificacionMedio").css({
          "background-image": "url(css/img/medio.png)"
        });
      }
    }

    $scope.cambiarFavorito = function() {
      $ionicLoading.show();
      if ($scope.lugarFavorito == false) {
        $http.get(ip + '/agregar-favorito?usuario=' + localStorage.getItem("usuario") + "&sitio=" + $stateParams.nombre)
          .success(function(datos) {
            $ionicLoading.hide();
            var alertPopup = $ionicPopup.alert({
              title: 'Favorito ',
              template: 'Lugar agregado a Favoritos'
            });
            $("#favorito").css({
              "background-image": "url(css/img/estrellaSi.png)"
            });
            $scope.lugarFavorito.lugarFavorito = true;

          }).error(function(datos, status, headers, config) {
            $ionicLoading.hide();
            var alertPopup = $ionicPopup.alert({
              title: 'Sin conexion con el servidor',
              template: 'Revisa tu conexión de internet'
            });
          });


      } else {
        $http.get(ip + '/agregar-favorito?usuario=' + localStorage.getItem("usuario") + "&sitio=" + $stateParams.nombre)
          .success(function(datos) {
            $ionicLoading.hide();
            var alertPopup = $ionicPopup.alert({
              title: 'Favorito ',
              template: 'Lugar eliminado de Favoritos'
            });
            $("#favorito").css({
              "background-image": "url(css/img/estrellaNo.png)"
            });
            $scope.lugarFavorito.lugarFavorito = false;

          }).error(function(datos, status, headers, config) {
            $ionicLoading.hide();
            var alertPopup = $ionicPopup.alert({
              title: 'Sin conexion con el servidor',
              template: 'Revisa tu conexión de internet'
            });
          });


      }
    }

    $scope.like = function(id) {
    	var voto=false;
      $ionicLoading.show();
      for (var i = 0; i <idComnetarios.length; i++) {
      	 if(idComnetarios[i]==id){
      	 	voto=true;
      	 }
      }
      if (voto==false) {
      $http.get(ip + '/retroalimentacion-alerta?sitio=' + $scope.nombreServicio + "&id=" + id + "&tipo=" + "true")
        .success(function(data) {
          console.log(data);
          if (data.length>0) {
           data=data.reverse();
          }
          $ionicLoading.hide();
          $scope.comentariosCargados = [];
          for (var i = 0; i < data.length; i++) {
            var date = new Date();
            var diferencia = parseInt((date.getTime() - data[i].fechaPublicacion) / 60000);
            var coment = {
              comentario: data[i].comentario,
              estado: data[i].estado,
              tiempo: diferencia,
              id: data[i].id,
              like:data[i].like,
              dislike:data[i].dislike
            };
            $scope.comentariosCargados.push(coment);
            idComnetarios.push(id);
          }
        }).error(function(data, status, headers, config) {
          $ionicLoading.hide();
          var alertPopup = $ionicPopup.alert({
            title: 'Sin conexion con el servidor',
            template: 'Revisa tu conexión de internet'
          });
        });
        }
        else{
        	$ionicLoading.hide();
          var alertPopup = $ionicPopup.alert({
            title: 'Ya votaste por este comentario',
            template: ''
          });
        }

    }

    $scope.dislike = function(id) {
    	var voto=false;
      $ionicLoading.show();
      for (var i = 0; i < idComnetarios.length; i++) {
      	 if(idComnetarios[i]==id){
      	 	voto=true;
      	 }
      }
      if (voto==false) {
      $http.get(ip + '/retroalimentacion-alerta?sitio=' + $scope.nombreServicio + "&id=" + id + "&tipo=" + "false")
        .success(function(data) {
          console.log(data);
          $ionicLoading.hide();
          $scope.comentariosCargados = [];
          if (data.length>0) {
           data=data.reverse();
          }
          for (var i = 0; i < data.length; i++) {
            var date = new Date();
            var diferencia = parseInt((date.getTime() - data[i].fechaPublicacion) / 60000);
            var coment = {
              comentario: data[i].comentario,
              estado: data[i].estado,
              tiempo: diferencia,
              id: data[i].id,
              like:data[i].like,
              dislike:data[i].dislike
            };
            $scope.comentariosCargados.push(coment);
            idComnetarios.push(id);
          }
        }).error(function(data, status, headers, config) {
          $ionicLoading.hide();
          var alertPopup = $ionicPopup.alert({
            title: 'Sin conexion con el servidor',
            template: 'Revisa tu conexión de internet'
          });
        });
    	}
    	else{
    		$ionicLoading.hide();
          var alertPopup = $ionicPopup.alert({
            title: 'Ya votaste por este comentario',
            template: ''
          });
    	}
    }

  }
])

.controller('homeCtrl', ['$scope', '$cordovaGeolocation', '$http', '$window', '$state', '$ionicLoading', '$ionicPopup', 'ListaServicios', 'ipConf',
  function($scope, $cordovaGeolocation, $http, $window, $state, $ionicLoading, $ionicPopup, ListaServicios, ipConf) {
    $(".nombreServicioMapa").hide();
    $scope.mostrarUbicaciones = false;
    $scope.servicioActual = "ninguno";
    $scope.mostarNotificaciones = false;
    var ubicacion = null;
    var ip = ipConf;

    var marcadoresIniciales = [];

    $ionicLoading.show();
    $cordovaGeolocation
      .getCurrentPosition()
      .then(function(position) {

        $http.get(ip + '/servicios-login?usuario=' + localStorage.getItem('usuario') + '&latitud=' + position.coords.latitude + '&longitud=' + position.coords.longitude)
          .success(function(data) {
            localStorage.setItem("puntaje",data[0].usuario.puntaje);
            

            marcadoresIniciales = [];

            for (var i = 0; i < data.length; i++) {

              if (data[i].restaurante != null) {

                for (var j = 0; j < ListaServicios.restaurantes.length; j++) {
                  if (data[i].restaurante.nombre == ListaServicios.restaurantes[j].message) {
                    ListaServicios.restaurantes[j].disponibilidadNumerico = data[i].restaurante.estado.disponibilidad;
                    ListaServicios.restaurantes[j].icon.iconUrl='img/marcadorRestaurantesRecomendado.png';
                    ListaServicios.restaurantes[j].icon.iconSize=[138,47];
                    marcadoresIniciales.push(ListaServicios.restaurantes[j]);
                  }
                }


              }
              if (data[i].fotocopiadora != null) {
                for (var j = 0; j < ListaServicios.fotocopiadoras.length; j++) {
                  if (data[i].fotocopiadora.nombre == ListaServicios.fotocopiadoras[j].message) {
                    ListaServicios.fotocopiadoras[j].disponibilidadNumerico = data[i].fotocopiadora.estado.disponibilidad;
                    ListaServicios.fotocopiadoras[j].icon.iconUrl='img/marcadorFotocopiadorasRecomendado.png';
                    ListaServicios.fotocopiadoras[j].icon.iconSize=[138,47];
                    marcadoresIniciales.push(ListaServicios.fotocopiadoras[j]);
                  }
                }

              }
              if (data[i].sitio != null) {
                for (var j = 0; j < ListaServicios.sitiosEstudio.length; j++) {
                  if (data[i].sitio.nombre == ListaServicios.sitiosEstudio[j].message) {
                    ListaServicios.sitiosEstudio[j].disponibilidadNumerico = data[i].sitio.estado.disponibilidad;
                    ListaServicios.sitiosEstudio[j].icon.iconUrl='img/marcadorSitioEstudioRecomendado.png';
                    ListaServicios.sitiosEstudio[j].icon.iconSize=[138,47];
                    marcadoresIniciales.push(ListaServicios.sitiosEstudio[j]);
                  }
                }

              }
              ubicacion = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            message: "Estas aca!",
            draggable: false,
            icon: {
              iconUrl: 'img/gpsSalida.png',
              iconSize: [45, 45],
              iconAnchor: [22.35, 40.05],
              popupAnchor: [1, 0]
            }
          };
          marcadoresIniciales.push(ubicacion);
            }

            $scope.markers = JSON.parse(JSON.stringify(marcadoresIniciales));

            $http.get(ip + '/contar-notificaciones?usuario=' + localStorage.getItem("usuario"))
              .success(function(data) {

                if (data.notificaciones > 0) {
                  $scope.mostarNotificaciones = true;
                  $scope.numeroNotificaciones = data.notificaciones;
                } else {
                  $scope.mostarNotificaciones = false;
                }
                $http.get(ip + '/obtener-contactos?usuario=' + localStorage.getItem("usuario"))
                  .success(function(data) {
                    $ionicLoading.hide();
                    console.log("contactos");
                    console.log(data);
                    for (var i = 0; i < data.length; i++) {
                      var amigo = {
                        message: data[i].idUsuario,
                        lat: data[i].localizacion.latitud,
                        lng: data[i].localizacion.longitud,
                        tipo: "amigo",
                        icon: {
                          iconUrl: 'img/marcadorAmigo.png',
                          iconSize: [36, 47],
                          iconAnchor: [19, 47],
                          popupAnchor: [1, 0]
                        }
                      }
                      $scope.markers.push(amigo);

                    }

                  }).error(function(data, status, headers, config) {
                    $ionicLoading.hide();
                    var alertPopup = $ionicPopup.alert({
                      title: 'Sin conexion con el servidor',
                      template: 'Revisa tu conexión de internet'
                    });
                  });

              }).error(function(data, status, headers, config) {
                $ionicLoading.hide();
                var alertPopup = $ionicPopup.alert({
                  title: 'Sin conexion con el servidor',
                  template: 'Revisa tu conexión de internet'
                });
              });
          }).error(function(data, status, headers, config) {
            $ionicLoading.hide();
            var alertPopup = $ionicPopup.alert({
              title: 'Sin conexion con el servidor',
              template: 'Revisa tu conexión de internet e inicia de nuevo NUBI'
            });
            
          });


      }, function(err) {
        $ionicLoading.hide();
            var alertPopup = $ionicPopup.alert({
              title: 'No se detecto GPS',
              template: 'Activa tu GPS para usar NUBI'
            });
           
        
      });

    $scope.irNotificaciones = function() {
      $scope.mostarNotificaciones = false;
      $scope.numeroNotificaciones = 0;
      $state.go('menu.notificaciones');
    }

    $scope.mostrarServicios = function() {
      if ($scope.servicioActual != "restaurantes" && $scope.servicioActual != 'fotocopiadoras' && $scope.servicioActual != 'sitiosEstudio') {
        if ($scope.mostrarUbicaciones == true) {
          $(".nombreServicioMapa").hide(400);
          $scope.mostrarUbicaciones = false;
          $("#botonBusquedaHome").css({
            "background-image": "url(css/img/busqueda.png)",
            "background-size": "30px 30px"
          });
          $("#botonEstudio").animate({
            right: "-60px"
          });
          $("#botonFotocopia").animate({
            right: "-100px"
          });
          $("#botonRestaurantes").animate({
            right: "-150px"
          });

        } else {
          $(".nombreServicioMapa").show(400);
          $scope.mostrarUbicaciones = true;
          $("#botonBusquedaHome").css({
            "background-image": "url(css/img/home.png)",
            "background-size": "80px 80px"
          });
          $("#botonEstudio").animate({
            right: "30px"
          });
          $("#botonFotocopia").animate({
            right: "30px"
          });
          $("#botonRestaurantes").animate({
            right: "30px"
          });

        }

      } else {
        $(".nombreServicioMapa").show(400);
        $scope.servicioActual = "ninguno";
        $("#botonBusquedaHome").css({
          "background-image": "url(css/img/home.png)",
          "background-size": "80px 80px"
        });
        $("#botonEstudio").animate({
          right: "30px"
        });
        $("#botonFotocopia").animate({
          right: "30px"
        });
        $("#botonRestaurantes").animate({
          right: "30px"
        });
        $("#verLista").animate({
          bottom: "-45px"
        });

        $scope.markers = JSON.parse(JSON.stringify(marcadoresIniciales));

      }
    };


    $scope.irListaServicios = function() {
      $scope.mostrarUbicaciones = false;
      $("#botonBusquedaHome").css({
        "background-image": "url(css/img/busqueda.png)",
        "background-size": "30px 30px"
      });
      $("#botonEstudio").css({
        right: "-60px"
      });
      $("#botonFotocopia").css({
        right: "-100px"
      });
      $("#botonRestaurantes").css({
        right: "-150px"
      });
      $("#verLista").css({
        bottom: "-45px"
      });
      $scope.markers = JSON.parse(JSON.stringify(marcadoresIniciales));
      $state.go('menu.listaServicios', {
        'tipo': $scope.servicioActual
      });
      $scope.servicioActual = 'ninguno';
    }

    $scope.mostrarEnMapa = function(tipoServicio) {
      $(".nombreServicioMapa").hide(400);
      $("#verLista").animate({
        bottom: "55px"
      });
      $("#botonBusquedaHome").css({
        "background-image": "url(css/img/back.png)",
        "background-size": "30px 30px"
      });
      if (tipoServicio == 'restaurantes') {
        $scope.servicioActual = 'restaurantes';
        var locations = ListaServicios.restaurantes;
        $scope.markers = JSON.parse(JSON.stringify(locations));
        $("#botonEstudio").animate({
          right: "-100px"
        });
        $("#botonFotocopia").animate({
          right: "-100px"
        });
      }
      if (tipoServicio == 'fotocopiadoras') {
        $scope.servicioActual = 'fotocopiadoras';
        var locations = ListaServicios.fotocopiadoras;
        $scope.markers = JSON.parse(JSON.stringify(locations));
        $("#botonEstudio").animate({
          right: "-100px"
        });
        $("#botonRestaurantes").animate({
          right: "-100px"
        });
      }
      if (tipoServicio == 'sitiosEstudio') {
        $scope.servicioActual = 'sitiosEstudio';
        var locations = ListaServicios.sitiosEstudio;
        $scope.markers = JSON.parse(JSON.stringify(locations));
        $("#botonFotocopia").animate({
          right: "-100px"
        });
        $("#botonRestaurantes").animate({
          right: "-100px"
        });
      }
      $scope.localizarGPS();

    }

    $scope.localizarGPS = function() {

      $cordovaGeolocation
        .getCurrentPosition()
        .then(function(position) {
          ubicacion = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            message: "Estas aca!",
            draggable: false,
            icon: {
              iconUrl: 'img/gpsSalida.png',
              iconSize: [45, 45],
              iconAnchor: [22.35, 40.05],
              popupAnchor: [1, 0]
            }
          };
          if ($scope.markers[$scope.markers.length - 1].message == "Estas aca!") {
            $scope.markers.pop();
          }
          $scope.markers.push(ubicacion);

        }, function(err) {
          // error
          console.log("Location error!");
          console.log(err);
        });

    };



    angular.extend($scope, {
      defaults: {
        //'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        //'http://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png'
        tileLayer: 'http://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png',
        maxZoom: 18,
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
      maxbounds: {
        southWest: {
          lat: 4.625201476849557,
          lng: -74.0658438205719
        },
        northEast: {
          lat: 4.632687165640622,
          lng: -74.06105875968932
        }
      },
      markers: marcadoresIniciales


    });

    $scope.$on('leafletDirectiveMarker.click', function(e, args) {
      if ($scope.markers[parseInt(args.modelName)].message != "Estas aca!" && $scope.markers[parseInt(args.modelName)].tipo != "amigo") {
        $ionicLoading.show();
        console.log($scope.markers[parseInt(args.modelName)]);
        $http.get(ip + '/disponibilidad?sitio=' + $scope.markers[parseInt(args.modelName)].message)
          .success(function(data) {
            console.log(data)
            $ionicLoading.hide();
            $state.go('menu.detalleServicio', {
              nombre: $scope.markers[parseInt(args.modelName)].message,
              imagen: $scope.markers[parseInt(args.modelName)].imagen,
              disponibilidad: (data.disponibilidad * 100)
            });
          }).error(function(data, status, headers, config) {
            $ionicLoading.hide();
            var alertPopup = $ionicPopup.alert({
              title: 'Sin conexion con el servidor',
              template: 'Revisa tu conexión de internet'
            });
          });



      }
    });


  }
])

.controller('listaDeAmigosCtrl', ['$scope', '$stateParams', '$http', '$ionicLoading', '$ionicPopup', 'ipConf',
    function($scope, $stateParams, $http, $ionicLoading, $ionicPopup, ipConf) {
      var ip = ipConf;

      $ionicLoading.show();
      $http.get(ip + '/consultar-listacontactos?usuario=' + localStorage.getItem("usuario"))
        .success(function(data) {
          $ionicLoading.hide();
          $scope.listaAmigos = data;
          console.log(data);
        }).error(function(data, status, headers, config) {
          $ionicLoading.hide();
          var alertPopup = $ionicPopup.alert({
            title: 'Sin conexion con el servidor',
            template: 'Revisa tu conexión de internet'
          });
        });

      $scope.eliminarAmigo = function(nombreAmigo) {
        var confirmPopup = $ionicPopup.confirm({
          title: 'Eliminar amigo',
          template: 'Quieres eliminar a ' + nombreAmigo
        });

        confirmPopup.then(function(res) {
          if (res) {
            $ionicLoading.show();
            $http.get(ip + '/eliminar-contacto?usuario=' + localStorage.getItem("usuario") + '&contacto=' + nombreAmigo)
              .success(function(data) {
                $ionicLoading.hide();
                $ionicLoading.show();
                $http.get(ip + '/consultar-listacontactos?usuario=' + localStorage.getItem("usuario"))
                  .success(function(data) {
                    $ionicLoading.hide();
                    $scope.listaAmigos = data;

                  }).error(function(data, status, headers, config) {
                    $ionicLoading.hide();
                    var alertPopup = $ionicPopup.alert({
                      title: 'Sin conexion con el servidor',
                      template: 'Revisa tu conexión de internet'
                    });
                  });


                var alertPopup = $ionicPopup.alert({
                  title: nombreAmigo + ' eliminado de lista de amigos',
                  template: ''
                });


              }).error(function(data, status, headers, config) {
                $ionicLoading.hide();
                var alertPopup = $ionicPopup.alert({
                  title: 'Sin conexion con el servidor',
                  template: 'Revisa tu conexión de internet'
                });
              });

          } else {
            console.log('No se elimino');
          }
        });
      }



    }
  ])
  .controller('agregarAmigoCtrl', ['$scope', '$stateParams', '$http', '$ionicLoading', '$ionicPopup', '$state', '$ionicHistory', 'ipConf',
    function($scope, $stateParams, $http, $ionicLoading, $ionicPopup, $state, $ionicHistory, ipConf) {
      var ip = ipConf;

      $scope.agregarAmigo = function() {
        nombreAmigo = document.getElementById("nombreAmigo").value;
        mensaje = "Te ha agregado " + localStorage.getItem("usuario");
        if (nombreAmigo.length > 0) {
          $ionicLoading.show();
          $http.get(ip + '/agregar-contacto?usuario=' + localStorage.getItem("usuario") + '&contacto=' + nombreAmigo)
            .success(function(data) {

              console.log(data);
              if (data.idUsuario != null) {
                $http.get(ip + '/agregar-notificacion?remitente=' + localStorage.getItem("usuario") + '&destinatario=' + nombreAmigo + "&comentario=" + mensaje + '&tipo=amigo')
                  .success(function(data) {
                    console.log(data);
                    $http.get(ip + '/agregar-contacto?usuario=' + nombreAmigo + '&contacto=' + localStorage.getItem("usuario"))
                      .success(function(data) {
                        console.log(data);
                        $ionicLoading.hide();

                      }).error(function(data, status, headers, config) {
                        $ionicLoading.hide();
                        var alertPopup = $ionicPopup.alert({
                          title: 'Sin conexion con el servidor',
                          template: 'Revisa tu conexión de internet'
                        });
                      });


                  }).error(function(data, status, headers, config) {
                    $ionicLoading.hide();
                    var alertPopup = $ionicPopup.alert({
                      title: 'Sin conexion con el servidor',
                      template: 'Revisa tu conexión de internet'
                    });
                  });
                $ionicLoading.hide();
                var alertPopup = $ionicPopup.alert({
                  title: 'Amigo agregado',
                  template: ''
                });
                $ionicHistory.nextViewOptions({
                  disableBack: true
                });
                $state.go('menu.home');

              } else {
                $ionicLoading.hide();
                var alertPopup = $ionicPopup.alert({
                  title: 'El usuario no existe en NUBI',
                  template: ''
                });
              }

            }).error(function(data, status, headers, config) {
              $ionicLoading.hide();
              var alertPopup = $ionicPopup.alert({
                title: 'Sin conexion con el servidor',
                template: 'Revisa tu conexión de internet'
              });
            });
        }
        document.getElementById("nombreAmigo").value = "";
      }


    }
  ])

.controller('serviciosEnMapaCtrl', ['$scope', '$stateParams', 'ListaServicios',
  function($scope, $stateParams, ListaServicios) {
    var locations = ListaServicios.restaurantes;
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
  }
])

.controller('listaGruposCtrl', ['$scope', '$stateParams', '$ionicHistory', '$state', '$ionicPopup', '$ionicLoading', '$http', 'ipConf',
  function($scope, $stateParams, $ionicHistory, $state, $ionicPopup, $ionicLoading, $http, ipConf) {
    var ip = ipConf;
    $ionicLoading.show();
    $http.get(ip + '/obtener-grupos?usuario=' + localStorage.getItem("usuario"))
      .success(function(data) {
        $ionicLoading.hide();
        console.log(data);
        $scope.gruposCargados = data;


      }).error(function(data, status, headers, config) {
        $ionicLoading.hide();
        var alertPopup = $ionicPopup.alert({
          title: 'Sin conexion con el servidor',
          template: 'Revisa tu conexión de internet'
        });
      });

    $scope.irDetalleGrupo=function(grupo){

      $state.go('menu.detallesGrupo',{nombreGrupo:grupo});
    }

  }
])

.controller('crearGrupoCtrl', ['$scope', '$stateParams', '$ionicHistory', '$state', '$ionicPopup', '$ionicLoading', '$http', 'ipConf',
  function($scope, $stateParams, $ionicHistory, $state, $ionicPopup, $ionicLoading, $http, ipConf) {
    $ionicLoading.show();
    var ip = ipConf;
    $scope.amigosSeleccionados = [];
    $ionicLoading.show();
    $http.get(ip + '/consultar-listacontactos?usuario=' + localStorage.getItem("usuario"))
      .success(function(data) {
        $ionicLoading.hide();
        $scope.listaAmigos = data;


      }).error(function(data, status, headers, config) {
        $ionicLoading.hide();
        var alertPopup = $ionicPopup.alert({
          title: 'Sin conexion con el servidor',
          template: 'Revisa tu conexión de internet'
        });
      });

    $scope.crearGrupo = function() {
      $ionicLoading.show();
      nombreGrupo = document.getElementById("nombreGrupo").value;
      if (nombreGrupo.length==0) {
            $ionicLoading.hide();
                    var alertPopup = $ionicPopup.alert({
                      title: 'Nombre invalido',
                      template: ''
                    });
            return false;
          }


      var ip = ipConf;

      $http.get(ip + '/crear-grupo?usuario=' + nombreGrupo + '&admin=' + localStorage.getItem("usuario"))
        .success(function(data) {
          if (data.validacionGrupo==false) {
            $ionicLoading.hide();
                    var alertPopup = $ionicPopup.alert({
                      title: 'Este grupo ya existe',
                      template: 'Intenta con otro nombre'
                    });
            return false;
          }

          $http.get(ip + '/agregar-contactogrupo?grupo=' + nombreGrupo + '&usuario=' + localStorage.getItem("usuario"))
            .success(function(data) {



              for (var i = 0; i < $scope.amigosSeleccionados.length; i++) {
                $http.get(ip + '/agregar-contactogrupo?grupo=' + nombreGrupo + '&usuario=' + $scope.amigosSeleccionados[i])
                  .success(function(data) {
                    
                  }


                  ).error(function(data, status, headers, config) {
                    $ionicLoading.hide();
                    var alertPopup = $ionicPopup.alert({
                      title: 'Sin conexion con el servidor',
                      template: 'Revisa tu conexión de internet'
                    });
                  });
              }

              $ionicLoading.hide();
                    var alertPopup = $ionicPopup.alert({
                      title: 'Grupo creado Exitosamente',
                      template: ''
                    });
                    $ionicHistory.nextViewOptions({
                  disableBack: true
                });
                    
                    localStorage.setItem("grupo", document.getElementById("nombreGrupo").value);
                    $state.go('menu.home');


            }).error(function(data, status, headers, config) {
              $ionicLoading.hide();
              var alertPopup = $ionicPopup.alert({
                title: 'Sin conexion con el servidor',
                template: 'Revisa tu conexión de internet'
              });
            });


        }).error(function(data, status, headers, config) {
          $ionicLoading.hide();
          var alertPopup = $ionicPopup.alert({
            title: 'Sin conexion con el servidor',
            template: 'Revisa tu conexión de internet'
          });
        });
    }



    $scope.agregarAmigoLista = function(seleccion) {
      esta = false;
      for (var i = 0; i < $scope.amigosSeleccionados.length; i++) {
        if (seleccion == $scope.amigosSeleccionados[i]) {
          esta = true;
          $scope.amigosSeleccionados.splice(i, 1);
        }
      }
      if (esta == false) {
        $scope.amigosSeleccionados.push(seleccion)
        console.log(seleccion)
      }
    }


  }
])


.controller('registroCtrl', ['$scope', '$stateParams', '$ionicHistory', '$state', '$ionicPopup', '$ionicLoading', '$http', 'ipConf',
  function($scope, $stateParams, $ionicHistory, $state, $ionicPopup, $ionicLoading, $http, ipConf) {
    var ip = ipConf;

    $scope.registro = function() {



      var usuario = document.getElementById("usuarioReg").value;
      var pass = document.getElementById("pass").value;
      var passwordConfirm = document.getElementById("passwordConfirm").value;
      var carrera = document.getElementById("carrera").value;
      if (pass.length > 0) {
        if (pass == passwordConfirm) {
          $ionicLoading.show();
          $http.get(ip + '/validar-usuario?usuario=' + usuario + '&pass=' + pass)
            .success(function(data) {

              console.log(data);
              if (data.validacionCuenta == false) {
                $ionicLoading.hide();
                var alertPopup = $ionicPopup.alert({
                  title: 'Nombre usuario no valido',
                  template: 'Digita un usuario valido de la PUJ'
                });
              }
              if (data.Cuenta == false) {
                $ionicLoading.hide();
                var alertPopup = $ionicPopup.alert({
                  title: 'Ya registrado',
                  template: 'El usuario ya se encuentra registrado'
                });

              }
              if (data.Cuenta == true) {
                $ionicLoading.hide();
                var alertPopup = $ionicPopup.alert({
                  title: 'Registro exitoso'
                });
                localStorage.setItem("usuario", document.getElementById("usuarioReg").value);
                $ionicHistory.nextViewOptions({
                  disableBack: true
                });
                $state.go('configuracionInicial');
              }

            });

        } else {
          var alertPopup = $ionicPopup.alert({
            title: 'Contraseñas no coinciden',
            template: 'Digita los mismos valores en los campos de las contraseñas'
          });
          document.getElementById("pass").value = "";
          document.getElementById("passwordConfirm").value = "";

        }
      } else {
        var alertPopup = $ionicPopup.alert({
          title: 'Contraseña invalida',
          template: 'Debe tener minimo 8 caracteres'
        });
        document.getElementById("pass").value = "";
        document.getElementById("passwordConfirm").value = "";
      }

    }

  }
])

.controller('loginCtrl', ['$scope', '$stateParams', '$ionicHistory', '$state', '$http', '$ionicPopup', '$ionicLoading', 'ipConf',
  function($scope, $stateParams, $ionicHistory, $state, $http, $ionicPopup, $ionicLoading, ipConf) {
    var ip = ipConf;

    if (localStorage.getItem("usuario") != null) {
      $state.go('menu.home');
    }
    $scope.login = function() {
      localStorage.clear();
      var nombreUsuario = document.getElementById("usuario").value;
      var password = document.getElementById("password").value;
      $ionicLoading.show();
      $http.get(ip + '/verificar-usuario?usuario=' + nombreUsuario + '&pass=' + password)
        .success(function(data) {
          console.log(data)
          if (data.login == true) {
            localStorage.setItem("usuario", document.getElementById("usuario").value);
            $ionicHistory.nextViewOptions({
              disableBack: true
            });
            $ionicLoading.hide();
            $state.go('menu.home');
          } else {
            $ionicLoading.hide();
            var alertPopup = $ionicPopup.alert({
              title: 'Usuario o contraseña invalido',
              template: ''
            });
          }

        }).error(function(data, status, headers, config) {
          $ionicLoading.hide();
          var alertPopup = $ionicPopup.alert({
            title: 'Sin conexion con el servidor',
            template: 'Revisa tu conexión de internet'
          });
        });

    }

  }
])



.controller('notificacionesCtrl', ['$scope', '$stateParams', '$http', '$ionicLoading', '$ionicPopup', 'ipConf',
  function($scope, $stateParams, $http, $ionicLoading, $ionicPopup, ipConf) {
  	$scope.tieneNotificaciones=false;
    var ip = ipConf;
    $scope.notificacionesCargadas = [];
    $ionicLoading.show();
    $http.get(ip + '/consultar-notifdestinatario?usuario=' + localStorage.getItem("usuario"))
      .success(function(data) {
        $ionicLoading.hide();
        console.log(data);

        if (data.length>0) {
           data=data.reverse();
           $scope.tieneNotificaciones=true;
        }
        $scope.notificacionesCargadas = data;
        for (var i = 0; i < $scope.notificacionesCargadas.length; i++) {
        	if($scope.notificacionesCargadas[i].tipo=="Notificacion grupo"){
        		$scope.notificacionesCargadas[i].imagen="img/grupos.png";
        	}
        	else{
        		if ($scope.notificacionesCargadas[i].tipo=="Grupo") {
        			$scope.notificacionesCargadas[i].imagen="img/grupos.png";
        		}
        		else{
        			$scope.notificacionesCargadas[i].imagen="img/userAdd.png";
        		}
        		
        	}
        }
        if (data.length==0) {
          $scope.notificacionesCargadas.push("No tienes notificaciones actualmente");
        }



      }).error(function(data, status, headers, config) {
        $ionicLoading.hide();
        var alertPopup = $ionicPopup.alert({
          title: 'Sin conexion con el servidor',
          template: 'Revisa tu conexión de internet'
        });
      });

  $scope.verDetalles=function(mensaje){
    var alertPopup = $ionicPopup.alert({
          title: 'Detalle notificación',
          template: mensaje
        });
  }
  }
])

.controller('menuCtrl', ['$scope', '$stateParams', '$ionicHistory', '$state',
  function($scope, $stateParams, $ionicHistory, $state) {
    $scope.nombreUsuario = localStorage.getItem("usuario");
    $scope.puntaje=localStorage.getItem("puntaje");
    if ($scope.puntaje<10) {
      $scope.grado="Nuvato"
    }
    if ($scope.puntaje>=10) {
      $scope.grado="Nuvato"
    }
    if ($scope.puntaje>=20) {
      $scope.grado="Nuvato"
    }
    if ($scope.puntaje>=40) {
      $scope.grado="Nuvato"
    }
    if ($scope.puntaje>=70) {
      $scope.grado="Nuvato"
    }

    $scope.cerrarSesion = function() {
      localStorage.clear();
      $ionicHistory.nextViewOptions({
        disableBack: true
      });
      navigator.app.exitApp();
    }


  }
])


.controller('buscarRutaCtrl', ['$scope', '$stateParams', '$http', '$cordovaGeolocation', 'ListaServicios',
  function($scope, $stateParams, $http, $cordovaGeolocation, ListaServicios) {
    var caminoCodificado = "";
    var caminos = [];
    var lista = ListaServicios.restaurantes;
    var latFinal = "";
    var lngFinal = "";
    for (var i = 0; i < lista.length; i++) {
      if (lista[i].message == $stateParams.nombre) {
        latFinal = lista[i].lat;
        lngFinal = lista[i].lng;
      }
    }

    $cordovaGeolocation
      .getCurrentPosition()
      .then(function(position) {


        $http.get('http://valhalla.mapzen.com/route?json={"locations":[{"lat":' + position.coords.latitude + ',"lon":' + position.coords.longitude + '},{"lat":' + latFinal + ',"lon":' + lngFinal + '}],"costing":"pedestrian","directions_options":{"units":"miles"}}&id=my_work_route&api_key=valhalla-UDVJPyv')
          .success(function(data) {

            caminoCodificado = String(data.trip.legs[0].shape);
            var camino = decode(caminoCodificado, 6);

            for (i = 0; i < camino.length; i++) {
              var caminito = {
                lat: camino[i][0],
                lng: camino[i][1]
              };
              caminos.push(caminito);
            }
          });


        $scope.markers.gps = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
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

      paths: {
        cam: {
          type: "polyline",
          weight: 3,
          latlngs: caminos
        }
      },
    });

  }
])

.controller('crearAlertaGrupoCtrl', ['$scope', '$stateParams', '$ionicHistory', '$state', '$ionicPopup', '$ionicLoading', '$http', '$cordovaGeolocation','ipConf','ListaServicios',
    function($scope, $stateParams, $ionicHistory, $state, $ionicPopup, $ionicLoading, $http,$cordovaGeolocation, ipConf,ListaServicios) {
     var ip=ipConf;
      $scope.nombreGrupo=$stateParams.nombreGrupo;
      $scope.tipos = [
     {  name: 'Restaurantes' }, 
     {  name: 'Fotocopiadoras' },
     {  name: 'Sitios de Estudio' }
   ];
  $scope.seleccionTipo=false;
  $scope.todoSeleccionado=false;

$scope.enviarAlertaGrupo=function(){
   $ionicLoading.show();
    $http.get(ip + '/notificacion-broadcast?grupo=' + $scope.nombreGrupo+"&comentario="+localStorage.getItem("usuario")+" creó una notificación en el grupo "+$scope.nombreGrupo+" para el servicio "+$scope.servicioSeleccionadoNombre+"   " +document.getElementById("comentarioGrupo").value+"&sitio="+$scope.servicioSeleccionadoNombre)
      .success(function(data) {
        $ionicLoading.hide();
        var alertPopup = $ionicPopup.alert({
          title: 'Alerta enviada al grupo '+$scope.nombreGrupo,
          template: ''
        });
        $state.go('menu.home');
        
      }).error(function(data, status, headers, config) {
        $ionicLoading.hide();
        var alertPopup = $ionicPopup.alert({
          title: 'Sin conexion con el servidor',
          template: 'Revisa tu conexión de internet'
        });
      });
}

  $scope.cambioServicio=function(servicio){
    console.log(servicio);
    $scope.servicioSeleccionadoNombre=servicio;
    $scope.todoSeleccionado=true;
    
  }

   
      $scope.cambioTipo=function(tipo){
        $ionicLoading.show();
      $cordovaGeolocation
        .getCurrentPosition()
        .then(function(position) {

          $scope.ubicacionesCargadas = [];
          if (tipo == "Sitios de Estudio") {
            
            $http.get(ip + '/filtrado-sitiosestudio?usuario=' + $scope.nombreGrupo + '&latitud=' + position.coords.latitude + '&longitud=' + position.coords.longitude)
              .success(function(data) {
                $scope.seleccionTipo=true;
                $scope.todoSeleccionado=false;

                $ionicLoading.hide();
                for (var i = 0; i < data.length; i++) {


                  for (var j = 0; j < ListaServicios.sitiosEstudio.length; j++) {
                    if (data[i].sitio.nombre == ListaServicios.sitiosEstudio[j].message) {
                      ListaServicios.sitiosEstudio[j].disponibilidad = disponibilidadAPalabra(data[i].sitio.estado.disponibilidad);
                      ListaServicios.sitiosEstudio[j].disponibilidadNumerico = data[i].sitio.estado.disponibilidad * 100;
                      ListaServicios.sitiosEstudio[j].puntaje = data[i].puntaje;
                      ListaServicios.sitiosEstudio[j].distancia = data[i].distancia;
                      $scope.ubicacionesCargadas.push(ListaServicios.sitiosEstudio[j]);
                    }
                  }
                }
              }).error(function(data, status, headers, config) {
                $ionicLoading.hide();
                var alertPopup = $ionicPopup.alert({
                  title: 'Sin conexion con el servidor',
                  template: 'Revisa tu conexión de internet'
                });
              });
          }
          if (tipo == "Restaurantes") {
           
            $http.get(ip + '/filtrado-restaurante?usuario=' + $scope.nombreGrupo + '&latitud=' + position.coords.latitude + '&longitud=' + position.coords.longitude)
              .success(function(data) {
                $scope.seleccionTipo=true;
                $ionicLoading.hide();
                for (var i = 0; i < data.length; i++) {


                  for (var j = 0; j < ListaServicios.restaurantes.length; j++) {
                    if (data[i].restaurante.nombre == ListaServicios.restaurantes[j].message) {
                      ListaServicios.restaurantes[j].disponibilidad = disponibilidadAPalabra(data[i].restaurante.estado.disponibilidad);
                      ListaServicios.restaurantes[j].disponibilidadNumerico = data[i].restaurante.estado.disponibilidad * 100;
                      ListaServicios.restaurantes[j].puntaje = data[i].puntaje;
                      ListaServicios.restaurantes[j].distancia = data[i].distancia;
                      $scope.ubicacionesCargadas.push(ListaServicios.restaurantes[j]);
                    }
                  }
                }
              }).error(function(data, status, headers, config) {
                $ionicLoading.hide();
                var alertPopup = $ionicPopup.alert({
                  title: 'Sin conexion con el servidor',
                  template: 'Revisa tu conexión de internet'
                });
              });
          }

          if (tipo == "Fotocopiadoras") {
            
            $http.get(ip + '/filtrado-fotocopiadora?usuario=' + $scope.nombreGrupo + '&latitud=' + position.coords.latitude + '&longitud=' + position.coords.longitude)
              .success(function(data) {
                $scope.seleccionTipo=true;
                $ionicLoading.hide();
                for (var i = 0; i < data.length; i++) {

                  for (var j = 0; j < ListaServicios.fotocopiadoras.length; j++) {
                    if (data[i].fotocopiadora.nombre == ListaServicios.fotocopiadoras[j].message) {
                      console.log(data[i]);
                      ListaServicios.fotocopiadoras[j].disponibilidad = disponibilidadAPalabra(data[i].fotocopiadora.estado.disponibilidad);
                      ListaServicios.fotocopiadoras[j].disponibilidadNumerico = data[i].fotocopiadora.estado.disponibilidad * 100;
                      ListaServicios.fotocopiadoras[j].puntaje = data[i].puntaje;
                      ListaServicios.fotocopiadoras[j].distancia = data[i].distancia;
                      $scope.ubicacionesCargadas.push(ListaServicios.fotocopiadoras[j]);

                    }
                  }
                }
              }).error(function(data, status, headers, config) {
                $scope.seleccionTipo=false;
                $ionicLoading.hide();
                var alertPopup = $ionicPopup.alert({
                  title: 'Sin conexion con el servidor',
                  template: 'Revisa tu conexión de internet'
                });
              });
          }

        }, function(err) {
          $scope.seleccionTipo=false;
          console.log("Location error!");
          console.log(err);
        });
      }

  }
])

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

var disponibilidadAPalabra = function(porcentaje) {
  if (porcentaje < 0.4) {
    return "Vacio";
  }
  if (porcentaje < 0.6) {
    return "Medio";
  }
  return "Lleno"

}