'use strict';


var angular = require('angular'),
    util = require('util'),
    Debug = require('debug');

    Debug.enable('*');
    var debug = new Debug('ironcast-main');

//var WelcomeCtrl = require('app/controllers/WelcomeCtrl');

var app = angular.module('ironcast', []);

app.service('trialDataService', function($http){
  delete $http.defaults.headers.common['X-Requested-With'];
  this.getData = function(callback){
    $http({
      method: 'GET',
      url: 'http://localhost:3000/en-us/trial'
    })
    .success(function(data){
      debug('Connection Success: ' + util.inspect(data));
      callback(data);
    })
    .error(function(data){
      debug('Connection Error: ' + data);
    });
  };
});


app.controller('WelcomeCtrl', function($scope, trialDataService){
  debug('WelcomeCtrl initialized');

  trialDataService.getData(function(dataResponse){
    var parsedJson = angular.fromJson(dataResponse);
    debug(parsedJson.trial);
    $scope.body = parsedJson.trial;
  });
  $scope.title = 'Data from Forge: Trial Collection';


});

