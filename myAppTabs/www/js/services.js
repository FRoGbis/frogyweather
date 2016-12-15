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