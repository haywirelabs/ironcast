'use strict';

var angular = require('angular');

//var WelcomeCtrl = require('app/controllers/WelcomeCtrl');

var app = angular.module('ironcast', []);

app.controller('WelcomeCtrl', function($scope){
  $scope.testVar = 'Test Message Woot';
});

