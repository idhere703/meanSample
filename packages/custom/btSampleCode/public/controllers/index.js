'use strict';

angular.module('mean.system').controller('BtIndexController', ['$scope', function($scope) {

  // Vars
  $scope.todos = [];
  $scope.newItem = "";
  $scope.tempId = 0;


  $scope.addTodo = function() {
    $scope.todos.push({title: $scope.newItem, complete: false, id: $scope.tempId});
    $scope.tempId++;
    $scope.newItem = "";
  };

  $scope.editTodo = function() {};

  $scope.getTodo = function() {};

  $scope.deleteTodo = function(item) {
    $scope.todos = $scope.todos.filter(function(todo) {
      // Only return the ones we want to keep.
      if(todo.id !== item.id) {
        return todo;
      }
    });
  };



}]);
