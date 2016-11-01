angular.module('app.services', [])

.factory('ipConf', [function(){
  return "http://192.168.43.117:8080/NUBI_REST0_3_war_exploded/nubi";
}])

.factory('ListaServicios', [ function() {

  var locationsObj = {};

  locationsObj.restaurantes = [
    {
      message : "Kiosco Ingeniería",
      lat : 4.62688,
      lng : -74.06363,
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
      message : "Cafetería Barón",
      lat : 4.62674,
      lng : -74.06381,
      imagen:"img/baron.jpg",
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
      message : "Cafetería Giraldo",
      lat : 4.62655,
      lng : -74.06497,
      imagen:"img/giraldo.jpg",
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
      message : "Cafetería Arquidiseño",
      lat : 4.62737,
      lng : -74.0647,
      imagen:"img/arqui.jpg",
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
      message : "La pecera",
      lat : 4.62822,
      lng : -74.06479,
      imagen:"img/pecera.jpg",
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
      message : "Biblioteca",
      lat :  4.62879,
      lng : -74.06455,
      imagen:"img/bibliocaf.jpg",
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
      message : "Tepanyaki Básicas",
      lat :  4.62997,
      lng : -74.06398,
      imagen:"img/basicastep.jpg",
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
      message : "Cafetería Básicas",
      lat :  4.63066,
      lng : -74.06393,
      imagen:"img/cafebasicas.jpg",
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
      message : "Parqueadero",
      lat :  4.62805,
      lng : -74.06324,
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
      message : "Creperia",
      lat :  4.62725,
      lng : -74.0626,
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


 
  ];

  locationsObj.fotocopiadoras = [
    {
      message : "Giraldo",
      lat : 4.62655,
      lng : -74.06504,
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
      message : "Tunel",
      lat : 4.62854,
      lng : -74.06464,
      imagen:"img/tunel.jpg",
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
      message : "Biblioteca",
      lat : 4.62876,
      lng : -74.06455,
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
      message : "Basicas 52",
      lat : 4.63071,
      lng : -74.0637,
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
      message : "Basicas 53",
      lat : 4.63032,
      lng : -74.06326,
      imagen:"img/foto53.jpg",
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
      message : "Edificio 67",
      lat : 4.62876,
      lng : -74.06287,
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
      message : "Baron Tercer Piso",
      lat : 4.62645,
      lng : -74.06383,
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


 
  ];

  locationsObj.sitiosEstudio = [
    {
      message : "Biblioteca",
      lat : 4.62884,
      lng : -74.06458,
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
      message:"Ingeniería 4 piso",
      lat:4.62689,
      lng: -74.06406,
      imagen: "img/4piso.jpg",
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
      lat:4.62662,
      lng:  -74.06381,
      imagen: "img/estubaron.jpg",
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
      message:"Edificio 53",
      lat:4.63022,
      lng:  -74.06337,
      imagen: "img/estu53.jpg",
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
      message:"Biblioteca Teología",
      lat:4.6263,
      lng:  -74.06323,
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
    { 
      message:"Edificio Giraldo",
      lat:4.6266,
      lng:  -74.06474,
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
    { 
      message:"Jorge Hoyos",
      lat:4.62758,
      lng:  -74.06508,
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