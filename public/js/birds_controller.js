angular.module('BirdApp').controller('BirdsController', BirdsController);

BirdsController.$inject = ['$http'];

function BirdsController($http) {
  var birds = this;

  birds.all = [];

  birds.getTheBirds = function(){
    $http.get('/sightings').then(function(response){
      // console.log(response.data);
      birds.all = response.data;
    });
  };


  birds.add = function(){
    var newSighting = {bird: birds.name, location: birds.locale};
    $http
    .post('/sightings', newSighting)
    .then(function(response){
      birds.getTheBirds();
    })
  };

  birds.getTheBirds();

}
