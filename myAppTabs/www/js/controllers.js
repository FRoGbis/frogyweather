angular.module('starter.controllers', [])

.controller('FilesCtrl', function($scope, File) {
  $scope.files = File.get();
})

.controller('UploadsCtrl', function($scope, File) {
  $scope.files = File.get();
})

.controller('DeleteCtrl', function($scope, File) {
  $scope.files = File.get();
})
/*
.controller('FileRecapCtrl', function($scope, $stateParams, $http, Parse, Calcul) {
  $http.get('files/'+$stateParams.fileName+'.his').success(function(data) {
    var columns = Parse.columns(data);
    var datas = Parse.lines(data, columns);
    columns = Calcul.average(datas, columns);
    columns = Calcul.min(datas, columns);
    columns = Calcul.max(datas, columns);

    $scope.file = {name: $stateParams.fileName, data: columns};
    console.log(datas);
    console.log(columns);
  }).
  error(function() {
    $scope.file = {name: "", data:"Error with file"};
  });
  */