function OrderFormController(){

    this.products=[{
            label:'Product One',
            id:1
        },{
            label:'Product Two',
            id:2
        },{
            label:'Producto Three',
            id:3

    }];
    this.onSubmit=function(){
        //pre-process
        console.log("call pre process form");
        this.submit();
        console.log("call post process form");
    };
}




angular
    .module('app')
    .controller('OrderFormController',OrderFormController);