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
            iconUrl: 'img/marcadorRestaurante.png',
            iconSize:     [36, 47], 
            iconAnchor:   [17, 43], 
            popupAnchor:  [1, 0] 
        }


    },
    {
      message:"Italiano",
      lat:4.63086,
      lng: -74.06370,
      imagen: "img/italiano.JPG",
      icon:{
            iconUrl: 'img/marcadorRestaurante.png',
            iconSize:     [36, 47], 
            iconAnchor:   [17, 43], 
            popupAnchor:  [1, 0] 
        }
    },
    {
      message:"La Pecera",
      lat:4.62818,
      lng: -74.06475,
      imagen: "img/7IHkbLjlTACS087GTxG5_article.jpg",
      icon:{
            iconUrl: 'img/marcadorRestaurante.png',
            iconSize:     [36, 47], 
            iconAnchor:   [17, 43], 
            popupAnchor:  [1, 0] 
        }
    },
    {
      message:"Creperia",
      lat:4.62723,
      lng: -74.06261,
      imagen: "img/italiano.JPG",
      icon:{
            iconUrl: 'img/marcadorRestaurante.png',
            iconSize:     [36, 47], 
            iconAnchor:   [17, 43], 
            popupAnchor:  [1, 0] 
        }
    }
 
  ];


  return locationsObj;

}])
.service('BlankService', [function(){

}]);