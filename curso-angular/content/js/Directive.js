function strech(){
    return{
        restrict: 'A',
        link:function($scope,$element,$attribs){
            var element=$element[0];
            element.addEventListener('focus',function(){
                this.style.width=250;
            });
            element.addEventListener('blur',function(){
                this.style.width=50;
            });
        }
    };
}



angular
    .module('app')
    .directive('strech',strech);