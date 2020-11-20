function TodoService($http){
    var API='http://localhost:3000/todos/';
    function retrieve(){
            return $http.get(API).then(function(response){
                    return response.data.splice(0,20);
                }
            );
    }

    function create (item){
        console.log("Create");        
        return $http.post(API,item).then(function(response){
            return response.data;
        });
    }
    
    function update (item){
        console.log("Update");
        
        return $http.put(API+item.id+"/",item).then(function(response){
            return response.data;
        });
    }

    function remove(item){
        console.log("Delete");
        return $http.delete(API+item.id).then(function(response){
            return response.data;
        });
    }
    return{
        create:create,
        retrieve:retrieve,
        update:update, 
        remove:remove
    };

}

angular
    .module('app')
    .factory('TodoService',TodoService);