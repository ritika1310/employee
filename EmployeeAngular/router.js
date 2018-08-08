'use strict';
app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "/src/views/empList.html",
            controller: "EmpController"
        })
        .when("/CreateEmp", {
            templateUrl: "/src/views/empCreate.html",
            controller: "EmpController"
        })
        .when("/UpdateEmp/:empId", {
            templateUrl: "/src/views/empUpdate.html",
            controller: "EmpUpdateController"
        })

    // use the HTML5 History API
    $locationProvider.html5Mode({ enabled: true, requireBase: false });
});