function MainController() {
  this.text='Hello world';
  this.myObject={
    one:'Key one',
    two:'Key two'
  };
  this.person={
    name:'Luis',
    address:'San Juan, E12'
  }
  this.myArray=['A','B','C'];
  this.myDate=new Date();
  this.myCurrency=289.3456;
}

angular
  .module('app')
  .controller('MainController', MainController);
