function CounterController(){
    
    this.inCrementCounter=function(){
        this.count++;
    };
    this.deCrementCounter=function(){
        this.count--;
    };
}




angular
    .module('app')
    .controller('CounterController',CounterController);