angular.module('starter.services', [])

  .factory('File', function() {
    var files = [
      { id: 1, name: '1_ENHANCED_01'},
      { id: 2, name: '1_ENHANCED_02'},
      { id: 3, name: '1_ENHANCED_03'},
      { id: 4, name: '1_ENHANCED_04'},
      { id: 5, name: '1_ENHANCED_05'},
      { id: 6, name: '1_ENHANCED_06'},
      { id: 8, name: '1_ENHANCED_08'},
      { id: 25, name: '1_ENHANCED_25'},
      { id: 26, name: '1_ENHANCED_26'}
    ];

    return {
      get: function() {
        return files;
      }
    };
  })

    .factory('Calcul', function() {
    return {
      average: function(lines, columns) {
        var sum;
        var count;

        for(var j=0; j < columns.length; j++) {
          sum = 0.0;
          count = 0;
          for (var i = 0; i < lines.length; i++) {
            if (!isNaN(parseFloat(lines[i][j]))) {
              sum += parseFloat(lines[i][j]);
              count++;
            }
          }
          if (!isNaN(parseFloat(sum/count)))
            columns[j].average = sum/count;
          else
            columns[j].average = "";
        }
        return columns;
      },
      min: function(lines, columns) {
        var min;
        var hour_min;
        var value;

        for(var j=0; j < columns.length; j++) {
          min = lines[0][j];
          hour_min = lines[0][columns.length];
          for (var i = 0; i < lines.length; i++) {
            value = parseFloat(lines[i][j]);
            if (!isNaN(value) && value < min) {
              min = value;
              hour_min = lines[i][columns.length];
            }
          }
          columns[j].min = min;
          columns[j].hour_min = hour_min;
        }
        return columns;
      },
      max: function(lines, columns) {
        var max;
        var hour_max;
        var value;

        for(var j=0; j < columns.length; j++) {
          max = 0.0;
          hour_max = "";
          for (var i = 0; i < lines.length; i++) {
            value = parseFloat(lines[i][j]);
            if (!isNaN(value) && value > max) {
              max = value;
              hour_max = lines[i][columns.length];
            }
          }
          columns[j].max = max;
          columns[j].hour_max = hour_max;
        }
        return columns;
      }
    };
  })

  .factory('Parse', function() {
    return {
      columns: function(data) {
        var parseData = data.split("\n")[1].split("	");
        var columns = [];
        var column;

        for(var i = 0; i < parseData.length; i++) {
          column = parseData[i];
          if (column == "AIR_TEMPERATURE" || column == "REL_HUMIDITY" || column == "AIR_PRESSURE" || column == "LOCAL_WS_2MIN_MNM")
            columns.push({name:column, id: i});
        }
        return columns;
      },

      lines: function(data, columns) {
        var parseData = data.split("\n");
        var parseLines = [];
        var lines = [];
        var linesData;

        for(var i = 2; i < parseData.length; i++) {
          linesData = [];
          lines = parseData[i].split("	");
          for (var j = 0; j < columns.length; j++ ) {
            linesData.push(lines[columns[j].id]);
          }
          linesData.push(lines[0]);
          parseLines.push(linesData);
        }
        return parseLines;
      }
    };
      });