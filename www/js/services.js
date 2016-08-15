angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.factory('LocationsService', [ function() {

  var locationsObj = {};

  locationsObj.savedLocations = [
    {
      name : "Javeriana",
      lat : 4.62869,
      lng : -74.06472
    },
    {
    	name:"Italiano",
    	lat:4.63086,
    	lng: -74.06370
    }

  ];

  return locationsObj;

}])
.factory('ListaRestaurantes', [ function() {

  var locationsObj = {};

  locationsObj.savedLocations = [
    {
      name : "Restaurante de prueba",
      lat : 4.62869,
      lng : -74.06472,
      imagen:"img/7IHkbLjlTACS087GTxG5_article.jpg"

    },
    {
      name:"Italiano",
      lat:4.63086,
      lng: -74.06370,
      imagen: "img/italiano.jpg"
    },
    {
      name:"La Pecera",
      lat:4.62818,
      lng: -74.06475,
      imagen: "img/7IHkbLjlTACS087GTxG5_article.jpg"
    }

  ];

  return locationsObj;

}])
.service('BlankService', [function(){

}]);