/*
Aourongajab Abir
10-09-2018
*/
angular.module("MyApp", [])
  .controller("Ctrl", function($scope) {

    $scope.names = ['Rupok', 'Ahona', 'Liyana'];
    $scope.isupdate = false;
    let upid = '';

    $scope.addNew = function() {
      if ($scope.newName != '') {
        $scope.names.push($scope.newName);
        $scope.newName = "";
      }
    }

    $scope.removeLast = function() {
      $scope.names.pop();
    }
    
    $scope.removethis = function(id){
       $scope.names.splice(id, 1);
    }

    $scope.edit = function(id){
      $scope.newName = $scope.names[id];
      upid = id;
      $scope.isupdate = true;
    }

    $scope.update = function(){
      $scope.names[upid] = $scope.newName;
      $scope.newName = "";
      upid = ''
      $scope.isupdate = false;
    }
  })
