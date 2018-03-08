contactApp.controller('contactList', function ($scope, $state, $commonFactries_MicroServices, $stateParams, $rootScope) {
    var self = this;

    getContactData = function () {
        $commonFactries_MicroServices.get().then(function (response) {
            if ($rootScope.contactsInfo == undefined) {
                $rootScope.contactsInfo = response.data.employee;
            }

        });
    }
    getContactData();

    $scope.onAddContactClick = function () {

        $state.go('addContacts');

    }

    console.log($rootScope.contactsInfo);

    self.contactListClick = function (index) {
        console.log("contactListClick",index);

        $state.go('addContacts',{"selectedContact":$rootScope.contactsInfo[index],"selectedIndex":index});

    }

});