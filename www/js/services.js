angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.factory('LocationsService', [ function() {

  var locationsObj = {};

  locationsObj.savedLocations = [
    {
      message : "Amigo 1",
      lat : 4.62869,
      lng : -74.06472,
      //icon:{
      //          iconUrl: 'img/giphy.gif',
      //           iconSize:     [45, 45], 
      //           iconAnchor:   [22.35, 40.05]  
      //        }
    },
    {
    	message:"Amigo 2",
    	lat:4.63086,
    	lng: -74.06370,
     // icon:{
      //          iconUrl: 'img/giphy2.gif',
      //           iconSize:     [45, 45], 
      //          iconAnchor:   [22.35, 40.05]  
     //    }
    }


  ];

  return locationsObj;

}])
.factory('ListaServicios', [ function() {

  var locationsObj = {};

  locationsObj.restaurantes = [
    {
      message : "Restaurante de prueba",
      lat : 4.62869,
      lng : -74.06472,
      imagen:"img/7IHkbLjlTACS087GTxG5_article.jpg"

    },
    {
      message:"Italiano",
      lat:4.63086,
      lng: -74.06370,
      imagen: "img/italiano.JPG"
    },
    {
      message:"La Pecera",
      lat:4.62818,
      lng: -74.06475,
      imagen: "img/7IHkbLjlTACS087GTxG5_article.jpg"
    },
    {
      message:"Creperia",
      lat:4.62723,
      lng: -74.06261,
      imagen: "img/italiano.JPG"
    }
 
  ];


  return locationsObj;

}])
.service('BlankService', [function(){

}]);