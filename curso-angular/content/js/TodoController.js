function TodoContorller(TodoService){
    var ctrl=this;
    this.newTodo='';
    this.list=[];
    this.getTodos=function(){
        return TodoService.retrieve().then(function(response){
            ctrl.list=response;
        });
    };
    this.addTodo=function(){
        if(!this.newTodo){
            return;
        }
        item={
            userId:1,
            id:Math.floor(Math.random() * 100) + 1, 
            title:ctrl.newTodo,            
            completed:false
        };
        console.log(item);
        TodoService.create(item).then(function(){
            ctrl.list.unshift(item);
        });      
         this.newTodo='';
    };
    
    this.updateTodo=function(item,index){
        TodoService.update(item);
    }
    this.removeTodo=function(item,index){
        TodoService.remove(item).then(function(){
            ctrl.list.splice(index,1);
        });
    }
    this.getRemaining=function(){
        return this.list.filter(
            function(item){
                return !item.completed;
            }
        );
    }
    this.getTodos();
}


angular
    .module('app')
    .controller('TodoController',TodoContorller);