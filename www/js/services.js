angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.factory('ListaServicios', [ function() {

  var locationsObj = {};

  locationsObj.restaurantes = [
    {
      message : "Restaurante de prueba",
      lat : 4.62869,
      lng : -74.06472,
      imagen:"img/7IHkbLjlTACS087GTxG5_article.jpg",
      icon:{
            iconUrl: 'img/marcadorRestaurantes.png',
            iconSize:     [36, 47], 
            iconAnchor:   [19, 47], 
            popupAnchor:  [1, 0] 
        }


    },
    {
      message:"Italiano",
      lat:4.63086,
      lng: -74.06370,
      imagen: "img/italiano.JPG",
      icon:{
            iconUrl: 'img/marcadorRestaurantes.png',
            iconSize:     [36, 47], 
            iconAnchor:   [19, 47], 
            popupAnchor:  [1, 0] 
        }
    },
    {
      message:"La Pecera",
      lat:4.62818,
      lng: -74.06475,
      imagen: "img/7IHkbLjlTACS087GTxG5_article.jpg",
      icon:{
            iconUrl: 'img/marcadorRestaurantes.png',
            iconSize:     [36, 47], 
            iconAnchor:   [19, 47], 
            popupAnchor:  [1, 0] 
        }
    },
    {
      message:"Creperia",
      lat:4.62723,
      lng: -74.06261,
      imagen: "img/italiano.JPG",
      icon:{
            iconUrl: 'img/marcadorRestaurantes.png',
            iconSize:     [36, 47], 
            iconAnchor:   [19, 47], 
            popupAnchor:  [1, 0] 
        }
    }
 
  ];

  locationsObj.fotocopiadoras = [
    {
      message : "Central",
      lat : 4.62860,
      lng : -74.06467,
      imagen:"img/7IHkbLjlTACS087GTxG5_article.jpg",
      icon:{
            iconUrl: 'img/marcadorFotocopiadoras.png',
            iconSize:     [36, 47], 
            iconAnchor:   [19, 47], 
            popupAnchor:  [1, 0] 
        }


    },
    {
      message:"Giraldo",
      lat:4.62658,
      lng: -74.06505,
      imagen: "img/italiano.JPG",
      icon:{
            iconUrl: 'img/marcadorFotocopiadoras.png',
            iconSize:     [36, 47], 
            iconAnchor:   [19, 47], 
            popupAnchor:  [1, 0] 
        }
    },
    {
      message:"Edificio 67",
      lat:4.62860,
      lng: -74.06291,
      imagen: "img/7IHkbLjlTACS087GTxG5_article.jpg",
      icon:{
            iconUrl: 'img/marcadorFotocopiadoras.png',
            iconSize:     [36, 47], 
            iconAnchor:   [19, 47], 
            popupAnchor:  [1, 0] 
        }
    },
    {
      message:"Autoservicio Basicas",
      lat:4.63066,
      lng: -74.06372,
      imagen: "img/italiano.JPG",
      icon:{
            iconUrl: 'img/marcadorFotocopiadoras.png',
            iconSize:     [36, 47], 
            iconAnchor:   [19, 47], 
            popupAnchor:  [1, 0] 
        }
    }
 
  ];

  locationsObj.sitiosEstudio = [
    {
      message : "Biblioteca",
      lat : 4.62881,
      lng : -74.06464,
      imagen:"img/7IHkbLjlTACS087GTxG5_article.jpg",
      icon:{
            iconUrl: 'img/marcadorSitiosEstudio.png',
            iconSize:     [36, 47], 
            iconAnchor:   [19, 47], 
            popupAnchor:  [1, 0] 
        }


    },
    {
      message:"Salas Estudio Baron",
      lat:4.62660,
      lng: -74.06380,
      imagen: "img/italiano.JPG",
      icon:{
            iconUrl: 'img/marcadorSitiosEstudio.png',
            iconSize:     [36, 47], 
            iconAnchor:   [19, 47], 
            popupAnchor:  [1, 0] 
        }
    },
    {
      message:"Edificio 54",
      lat:4.63024,
      lng:  -74.06341,
      imagen: "img/7IHkbLjlTACS087GTxG5_article.jpg",
      icon:{
            iconUrl: 'img/marcadorSitiosEstudio.png',
            iconSize:     [36, 47], 
            iconAnchor:   [19, 47], 
            popupAnchor:  [1, 0] 
        }
    },
    {
      message:"Ultimo piso Ingenieria",
      lat:4.62695,
      lng: -74.06401,
      imagen: "img/italiano.JPG",
      icon:{
            iconUrl: 'img/marcadorSitiosEstudio.png',
            iconSize:     [36, 47], 
            iconAnchor:   [19, 47], 
            popupAnchor:  [1, 0] 
        }
    }
 
  ];


  return locationsObj;

}])
.service('BlankService', [function(){

}]);