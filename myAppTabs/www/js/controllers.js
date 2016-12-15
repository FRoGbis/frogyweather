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