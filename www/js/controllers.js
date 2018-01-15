angular.module('starter.controllers', ['ngCordova'])


.controller('DashCtrl', function($scope, $rootScope, $cordovaBarcodeScanner, $ionicPlatform) {
        var vm = this;
console.log("entra!");
        $scope.scan = function(){
            $ionicPlatform.ready(function() {
                $cordovaBarcodeScanner
                    .scan()
                    .then(function(result) {
                      console.log("scaneando");
                        // Success! Barcode data is here
                        $scope.scanResults = "We got a barcode\n" +
                        "Result: " + result.text + "\n" +
                        "Format: " + result.format + "\n" +
                        "Cancelled: " + result.cancelled;
                    }, function(error) {
                        // An error occurred
                        $scope.scanResults = 'Error: ' + error;
                        console.log("Error " +error);
                    });
            });
        };

        $scope.scan2 = function() {
          console.log("scan2()");
        };

        vm.scanResults = '';
    })

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
    console.log("Remover!!!");
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  console.log("Detalle");
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})
;
