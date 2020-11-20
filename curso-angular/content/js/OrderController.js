function OrderController(){
    this.customerOrder={
        name:'',
        email:'',
        location:'',
        comments:'',
        product:{
            label:'',
            id:''
        }
    };

    this.submitOrder=function(){
        console.log("call submit controller");
        console.log("Submit Object",this.customerOrder);
    };
}




angular
    .module('app')
    .controller('OrderController',OrderController);
    