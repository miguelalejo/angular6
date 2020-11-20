function orderForm(){
    return{
        scope:{},
        bindToController: {
            order:'=data',
            submit:'&'
        },
        controller: 'OrderFormController as form',
        restrict:'E',
        template: `
        <pre>
        {{form.order|json}}
        {{orderForm.name|json}}
        {{orderForm.orderChoice|json}}
        <pre>
        <form name="orderForm" novalidate ng-submit="form.onSubmit();">
            <input name="name" required="true" type="text" placeholder="Your name" ng-model="form.order.name">
            <div ng-show="orderForm.name.$error.required && orderForm.name.$touched">
            Name is required
            </div>
            <input name="email" type="email" placeholder="Your email" ng-model="form.order.email">
            <div ng-show="orderForm.email.$error.required && orderForm.email.$touched">
            Email is required
            </div>
            <div ng-show="orderForm.email.$error.email && orderForm.email.$invalid">
            Email is invalid
            </div>
            <input name="location" type="text" placeholder="Your location" ng-model="form.order.location">
            <textarea name="comments" placeholder="Any messages(optional)" ng-model="form.order.comments"></textarea>
            <select 
            name="orderChoice"
            required="true"
            ng-model="form.order.product"
            ng-options="product.label for product in form.products">
            <option value="">Select..</option>
            </select>
            <button type="submit" ng-disabled="orderForm.$invalid">Order</button>
        </form>    
        
        `
    };

}



angular
    .module('app')
    .directive('orderForm',orderForm);