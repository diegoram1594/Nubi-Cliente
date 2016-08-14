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
.service('BlankService', [function(){

}]);