app.service('empService', function ($http) {
    //Get Employees
    this.getEmployees = function () {
        return $http.get('http://localhost:54296/api/Employees')
    }
    //Get Employee by id
    this.getEmployeeById = function (empId) {
        return $http.get('http://localhost:54296/api/Employees/GetEmployee?id=' + empId)
    }
    // Add employee
    this.addEmployee = function (empData) {
        console.log(empData);
        return $http.post('http://localhost:54296/api/Employees/PostEmployee', empData);
    }
    // Update employee
    this.editEmployee = function (empData) {
        console.log(empData);
        return $http.put('http://localhost:54296/api/Employees/PutEmployee?id=' + empData.Id, empData);
    }
    //Delete Employee
    this.deleteEmployee = function (empId) {
        console.log(empId);
        return $http.delete('http://localhost:54296/api/Employees/DeleteEmployee?id=' + empId);
    }
})