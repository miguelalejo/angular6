function counter(){
    return{
        scope:{},
        restrict:'E',
        controller:'CounterController as counter',
        template:`<div>
        {{counter.counter}} <input type="button" ng-click="counter.inCrementCounter()" value="+"><input type="button" ng-click="counter.deCrementCounter()" value="-">
    </div>`

    };
}




angular
    .module('app')
    .directive('counter',counter);