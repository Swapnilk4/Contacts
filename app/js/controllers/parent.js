contactApp.controller('parent', function ($scope) {
   var self =this;
   self.isDashboard =false;
   self.isContact =true;

    $scope.onCellClick =function(item){

        if(angular.equals(item,"Dashboard")){
            self.isDashboard =true;
            self.isContact =false;
        }else{
            self.isDashboard =false;
            self.isContact =true;
        }
       
    }
});
