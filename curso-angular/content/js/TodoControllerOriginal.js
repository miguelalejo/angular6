function TodoContorller(){
    this.newTodo='';
    this.list=[{
        title:'First',
        action:false,
        completed:false
    },{
        title:'Second',
        action:false,
        completed:false
    },{
        title:'Third',
        action:true,
        completed:true
    }];

    this.addTodo=function(){
         this.list.unshift({
             title:this.newTodo,
             action:false,
             completed:false
         });   
         this.newTodo='';
    };
    this.removeTodo=function(item,index){
        this.list.splice(index,1);
    }
    this.getRemaining=function(){
        return this.list.filter(
            function(item){
                return !item.completed;
            }
        );
    }
}


angular
    .module('app')
    .controller('TodoController',TodoContorller);