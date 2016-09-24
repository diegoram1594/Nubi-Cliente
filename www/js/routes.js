angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
     .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller:'menuCtrl'
    
  })

      .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller:'loginCtrl'
   
  })
      .state('registro', {
      url: '/registro',
      templateUrl: 'templates/registro.html',
      controller:'registroCtrl'
   
  })


  .state('menu.configuracion', {
    url: '/usuarioConfiguracion',
    views: {
      'side-menu21': {
        templateUrl: 'templates/configuracion.html',
        controller: 'configuraciNCtrl'
      }
    }
  })
  .state('configuracionInicial', {
    url: '/usuarioConfiguracionInicial',
        templateUrl: 'templates/configuracionInicial.html',
        controller: 'configuracionInicialCtrl'
  })


  .state('menu.listaServicios', {
    url: '/listaServicios:tipo',
    views: {
      'side-menu21': {
        templateUrl: 'templates/listaServicios.html',
        controller: 'listaServiciosCtrl'
      }
    }
  })

  .state('menu.detalleServicio', {
    url: '/detalleserviciosPage:nombre/:imagen',
    views: {
      'side-menu21': {
        templateUrl: 'templates/detalleServicio.html',
        controller: 'detalleServicioCtrl'
      }
    }
  })

  .state('menu.home', {
    url: '/homePage',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.listaDeAmigos', {
    url: '/listaamigosPage',
    views: {
      'side-menu21': {
        templateUrl: 'templates/listaDeAmigos.html',
        controller: 'listaDeAmigosCtrl'
      }
    }
  })

  .state('menu.serviciosEnMapa', {
    url: '/serviciosMapa',
    views: {
      'side-menu21': {
        templateUrl: 'templates/serviciosEnMapa.html',
        controller: 'serviciosEnMapaCtrl'
      }
    }
  })

  .state('menu.listaGrupos', {
    url: '/Listagrupos',
    views: {
      'side-menu21': {
        templateUrl: 'templates/listaGrupos.html',
        controller: 'listaGruposCtrl'
      }
    }
  })

  .state('menu.grupo', {
    url: '/detallesGrupo',
    views: {
      'side-menu21': {
        templateUrl: 'templates/grupo.html',
        controller: 'grupoCtrl'
      }
    }
  })

  .state('menu.buscarRuta', {
    url: '/buscarRuta:nombre/:tipo',
    views: {
      'side-menu21': {
        templateUrl: 'templates/buscarRuta.html',
        controller: 'buscarRutaCtrl'
      }
    }
  })


  .state('menu.crearAlertaGrupo', {
    url: '/crearAlerta',
    views: {
      'side-menu21': {
        templateUrl: 'templates/crearAlertaGrupo.html',
        controller: 'crearAlertaGrupoCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/login')

  

});