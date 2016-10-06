var myApp = angular.module('myApp', []);
// creating the controller
myApp.controller('mainController', function($scope) {
    $scope.income = [];
    $scope.expense = [];
    $scope.totalincome = 0;
    $scope.totalexpense = 0;
    $scope.difference = 0;




    $scope.add = function() {
        $scope.income.push({ 'incomeinfo': $scope.incdescription, 'amount': $scope.amount });

        $scope.totalincome += parseInt($scope.amount);

    };

    $scope.addNew = function() {
        $scope.expense.push({ 'incomeinfoXP': $scope.incdescriptionXP, 'amountXP': $scope.amountXP });


        $scope.totalexpense += parseInt($scope.amountXP);

        $scope.difference = $scope.totalincome - $scope.totalexpense;

    };



});
