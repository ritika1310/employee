'use strict'

app.controller('EmpUpdateController', function ($scope, empService, $filter, $routeParams, $location) {
    $scope.editUser = {};
    empService.getEmployeeById($routeParams.empId).then(function (result) {
        $scope.editUser = result.data;
       
    }, function (error) {
        alert(error);
    });
    
    $scope.updateUser = function () {
        empService.editEmployee($scope.editUser).then(function () {
            $location.path('/');

        }, function (error) {
            alert(error);
        });
    };

});