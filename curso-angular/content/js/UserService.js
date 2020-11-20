function UserService($http){
    var API = 'http://localhost:3000/users/';
    this.getUser=function(userId){
       return  $http.get(API+userId)
            .then(function(response){
                return response.data;
                //console.log("RESPONSE");
                
            }, function(reason){
                console.log("ERROR");
                console.log(reason.data);
            }
            );
    };
}


angular
    .module('app')
    .service('UserService',UserService);