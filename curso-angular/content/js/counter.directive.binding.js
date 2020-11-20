function counter(){
    return{
        scope:{},
        bindToController:{
            title:'@name',
            count:'='//count
        },
        restrict:'E',
        controller:'CounterController as counter',
        template:`<div class="counter">
        {{counter.title}}<input type="text" ng-model="counter.count">
        <button type="button" ng-click="counter.inCrementCounter()">+</button>
        <button type="button" ng-click="counter.deCrementCounter()">-</button>
    </div>`

    };
}




angular
    .module('app')
    .directive('counter',counter);