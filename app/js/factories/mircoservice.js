contactApp.factory('$commonFactries_MicroServices', function ($http) {

        return {
            get: function () {
                console.log("inside function");
                return $http.get('/app/json/contacts.json');
            }
        };
   
});
