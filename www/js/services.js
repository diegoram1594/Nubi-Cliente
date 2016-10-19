angular.module('app.services', [])

.factory('ipConf', [function(){
  return "http://192.168.43.117:8080/NUBI_REST0_3_war_exploded/nubi";
}])

.factory('ListaServicios', [ function() {

  var locationsObj = {};

  locationsObj.restaurantes = [
    {
      message : "Restaurante de prueba",
      lat : 4.62869,
      lng : -74.06472,
      imagen:"img/7IHkbLjlTACS087GTxG5_article.jpg",
      disponibilidad:0,
      disponibilidadNumerico:0,
      puntaje:0,
      distancia:0,
      tipo:"restaurante",
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
      disponibilidad:0,
      disponibilidadNumerico:0,
      puntaje:0,
      distancia:0,
      tipo:"restaurante",
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
      disponibilidad:0,
      disponibilidadNumerico:0,
      puntaje:0,
      distancia:0,
      tipo:"restaurante",
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
      disponibilidad:0,
      disponibilidadNumerico:0,
      puntaje:0,
      distancia:0,
      tipo:"restaurante",
      icon:{
            iconUrl: 'img/marcadorRestaurantes.png',
            iconSize:     [36, 47], 
            iconAnchor:   [19, 47], 
            popupAnchor:  [1, 0] 
        }
    },
    {
      message:"Tempanyaki Básicas",
      lat:4.62967,
      lng: -74.06416,
      imagen: "img/italiano.JPG",
      disponibilidad:0,
      disponibilidadNumerico:0,
      puntaje:0,
      distancia:0,
      tipo:"restaurante",
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
      disponibilidad:0,
      disponibilidadNumerico:0,
      puntaje:0,
      distancia:0,
      tipo:"fotocopiadora",
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
      disponibilidad:0,
      disponibilidadNumerico:0,
      puntaje:0,
      distancia:0,
      tipo:"fotocopiadora",
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
      disponibilidad:0,
      disponibilidadNumerico:0,
      puntaje:0,
      distancia:0,
      tipo:"fotocopiadora",
      icon:{
            iconUrl: 'img/marcadorFotocopiadoras.png',
            iconSize:     [36, 47], 
            iconAnchor:   [19, 47], 
            popupAnchor:  [1, 0] 
        }
    },
    {
      message:"Fotocopiadora Básicas",
      lat:4.63066,
      lng: -74.06372,
      imagen: "img/italiano.JPG",
      disponibilidad:0,
      disponibilidadNumerico:0,
      puntaje:0,
      distancia:0,
      tipo:"fotocopiadora",
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
      imagen:"img/biblioteca.jpg",
      disponibilidad:0,
      disponibilidadNumerico:0,
      puntaje:0,
      distancia:0,
      tipo:"sitio",
      icon:{
            iconUrl: 'img/marcadorSitiosEstudio.png',
            iconSize:     [36, 47], 
            iconAnchor:   [19, 47], 
            popupAnchor:  [1, 0] 
        }


    },
    {
      message:"Ing 4 piso",
      lat:4.62692,
      lng: -74.06398,
      imagen: "img/italiano.JPG",
      disponibilidad:0,
      disponibilidadNumerico:0,
      puntaje:0,
      distancia:0,
      tipo:"sitio",
      icon:{
            iconUrl: 'img/marcadorSitiosEstudio.png',
            iconSize:     [36, 47], 
            iconAnchor:   [19, 47], 
            popupAnchor:  [1, 0] 
        }
    },
    { 
      message:"Baron Salas Estudio",
      lat:4.62665,
      lng:  -74.06379,
      imagen: "img/7IHkbLjlTACS087GTxG5_article.jpg",
      disponibilidad:0,
      disponibilidadNumerico:0,
      puntaje:0,
      distancia:0,
      tipo:"sitio",
      icon:{
            iconUrl: 'img/marcadorSitiosEstudio.png',
            iconSize:     [36, 47], 
            iconAnchor:   [19, 47], 
            popupAnchor:  [1, 0] 
        }
    }, 
  ];


  return locationsObj;

}])
.service('BlankService', [function(){

}]);