'use strict'

app.controller('EmpController', function ($scope, empService, $filter, $routeParams) {
    
    $scope.newUser = {Department:"IT"};
    //$scope.editUser = {};
    //$scope.currentEditEmployeeIndex = null;
    $scope.currentDeleteEmployeeId = null;
    $scope.empIdToDelete = null;
    //model for filters
    $scope.filters = {
        Department: "",
        Name: "",
        pagination: {
            currentPage: 1,
            numPerPage:5
        },
        
    }

    $scope.paginate = function (value) {
        var begin, end, index;
        begin = ($scope.filters.pagination.currentPage - 1) * $scope.filters.pagination.numPerPage;
        end = begin + $scope.filters.pagination.numPerPage;
        index = $scope.empObj.indexOf(value);
        return (begin <= index && index < end);
    };
    //
   
    var orderBy = $filter('orderBy');
    $scope.order = function (predicate) {
        $scope.predicate = predicate;
        $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
        $scope.friends = orderBy($scope.friends, predicate, $scope.reverse);
    };

    empService.getEmployees().then(function (result) {
        console.log(result.data);
        $scope.empObj = result.data;
    });
    // $scope.empObj = empService.getEmployees();

    $scope.createNewUser = function () {
        console.log($scope.newUser);
        console.log($scope.myForm);
        if ($scope.myForm.$valid) {
            empService.addEmployee($scope.newUser).then(function () {

            }, function (error) {
                console.log(error);
                alert("Error Occured");

            });
        } else {
            alert("Field input is invalid");
        }
        
    };
    //$scope.loadEmpDetailToEdit = function (empIndex) {
    //    console.log("hello update load");
    //    $scope.editUser = angular.copy($scope.empObj[empIndex]);
    //    console.log("update data",$scope.editUser);
    //    $scope.currentEditEmployeeIndex = empIndex; 
    //};
    //$scope.updateUser = function () {
        
    //    empService.editEmployee($scope.editUser).then(function () {
    //        $scope.empObj[$scope.currentEditEmployeeIndex] = angular.copy($scope.editUser);
    //        angular.element('#exampleModal').modal('hide');
    //    }, function (error) {
    //        alert(error);
    //    });
    //};
    
    $scope.selectedEmpIndex = function (empId) {
        $scope.empIdToDelete = empId;
    };
    $scope.deleteEmp = function () {
        empService.deleteEmployee($scope.empIdToDelete).then(function () {
            $scope.empObj = $scope.empObj.map(function (emp) {
                if (emp.Id !== $scope.empIdToDelete) {
                    return emp;
                }
            });
            angular.element('#exampleModal').modal('hide');
        }, function (error) {
            alert(error);
        });
    };
    
});
