function OrderController(){
    this.orderQuantity=10;
    this.orderName="Coca-Cola";
    this.orderQuantityHam=5;
    this.orderNameHam="Hamburguer";
}




angular
    .module('app')
    .controller('OrderController',OrderController);