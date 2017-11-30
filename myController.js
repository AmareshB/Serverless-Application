var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
    $scope.artist = "";
    $scope.songtitle = "";
    $scope.tableData = "";
    $scope.selectArtist = "";
    $scope.getData = function() {
        //alert("HI " + $scope.firstName +" "+ $scope.lastName);
        $scope.tableData = "";
        $http.get("https://9tb9iunyvi.execute-api.us-east-2.amazonaws.com/dev/testresource")
            .then(function(response) {
                $scope.tableData = response.data;
                console.log(response.data);
            });
    };
    $scope.putData = function() {
        $http.post(" https://9tb9iunyvi.execute-api.us-east-2.amazonaws.com/dev/insertmusic", {
                artist: $scope.artist,
                songtitle: $scope.songtitle
            })
            .then(function(response) {
                $scope.insertedData = response.data;
                console.log(response.data);
            });
    };
    $scope.queryData = function() {
         $scope.tableData = "";
        $http.post(" https://9tb9iunyvi.execute-api.us-east-2.amazonaws.com/dev/querymusictable",{
             artist: $scope.selectArtist,
        }).then(function(response){
             $scope.tableData = response.data;
            console.log(response.data);
        });
    }

});