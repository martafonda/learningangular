(function(){

var app = angular.module('store', [ ]);

app.controller('StoreController', function(){
	this.product = gem;
});

var gem = {
	name: "Dodecadron",
	price: 2.95,
	description: "This is the best gem ever."
}

})();