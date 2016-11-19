// angular.module('MyApp',['ngMaterial','ngMessages','material.svgAssetsCache'])
// .controller('DemoBasicCtrl', function ($scope,$http) {
//    $http.get('prof.json').then(function(response) {
//     console.log(Object.keys(response.data)[0]);
//     return Object.keys(response.data);
//   });
//     $scope.setProfessionValue = function() {
//       mainInfoFactory.getMainInfo().then(function(data) {
//         console.log(data);
//         $scope.profession = data;
//       })
//     };
//     $scope.setProfessionValue();

    


//   })

// .factory('mainInfoFactory', function($http) { 
//   var factory = {}; 
//   factory.getMainInfo = function() {
//     //Async 
//     //.success is deprecated 
//    $http.get('prof.json').then(function(response) {
//     console.log(Object.keys(response.data)[0]);
//     return Object.keys(response.data);
//   });
//  };
//   return factory;
// });

angular.module('MyApp',['ngMaterial','ngMessages','material.svgAssetsCache'])
.controller('DemoBasicCtrl', ['$scope','mainInfoFactory',function ($scope, mainInfoFactory) {
   mainInfoFactory.getMainInfo().then( function(data) {
     $scope.profession= Object.keys(data.data);
     $scope.roles= Object.keys(data.data);
     $scope.items= Object.keys(data.data);
   })



 $scope.clickSubmit=function(coordinator)
 {
  alert("Name="+coordinator.name);
};

}])



.factory('mainInfoFactory', function($http) {
  var factory = {};
  factory.getMainInfo = function() {
   var req = {};
   req.url = 'prof.json';
   req.method = 'GET';
   return $http(req);
 };
 return factory;
});