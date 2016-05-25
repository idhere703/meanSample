'use strict';

angular.module('mean.system').controller('BtIndexController', ['$scope', function($scope) {

  // Vars
  $scope.todos = [];
  $scope.newItem = "";
  $scope.tempId = 0;


  $scope.addTodo = function() {
    $scope.todos.push({
      title: $scope.newItem,
      complete: false,
      id: $scope.tempId,
      edit: false
    });

    $scope.tempId++;
    $scope.newItem = "";
  };

  $scope.deleteTodo = function(item) {
    $scope.todos = $scope.todos.filter(function(todo) {
      // Only return the ones we want to keep.
      if(todo.id !== item.id) {
        return todo;
      }
    });
  };

  $scope.deleteSelected = function() {
    $scope.todos = $scope.todos.filter(function(todo) {
      // Only return the ones we have completed.
      if(todo.complete === false) {
        return todo;
      }
    });
  };

  $scope.editTodo = function(item) {
    item.edit = true;
  };

  $scope.saveTodo = function(item) {
    item.edit = false;
  };


}]);
