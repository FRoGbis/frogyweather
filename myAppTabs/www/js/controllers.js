angular.module('starter.controllers', [])

.controller('FilesCtrl', function($scope, File) {
  $scope.files = File.get();
})

/* .controller('GraphsCtrl', function($scope) {
    Highcharts.chart('container', {
        title: {
            text: 'Temperature moyenne sur un mois',
            x: -20 //center
        },
        subtitle: {
            x: -20
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            title: {
                text: 'Temperature (°C)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '°C'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Tokyo',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, {
            name: 'New York',
            data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
        }, {
            name: 'Berlin',
            data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
        }, {
            name: 'London',
            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }]
    });
}) */

.controller('UploadsCtrl', function($scope, File) {
  $scope.files = File.get();
})

.controller('DeleteCtrl', function($scope, File) {
  $scope.files = File.get();
})
  //  .controller('UploadCtrl', function($scope) { })
    .controller('FileDetailsCtrl', function($scope, $stateParams, $http, Parse, Calcul) {
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

    })
   // .controller('RemoveCtrl', function($scope) {})
    .controller('GraphsCtrl', function($scope, Graphs) {
      $scope.chartSeries = Graphs.getSeries();
      $scope.chartConfig = Graphs.getConfig();

      $scope.addPoints = Graphs.addPoints();

      $scope.addSeries = Graphs.addSeries();

      $scope.removeRandomSeries = Graphs.removeRandomSeries();

      $scope.removeSeries = function (id) {
        var seriesArray = $scope.chartConfig.series;
        seriesArray.splice(id, 1)
      }

      $scope.toggleHighCharts = function () {
        this.chartConfig.useHighStocks = !this.chartConfig.useHighStocks
      }
    });