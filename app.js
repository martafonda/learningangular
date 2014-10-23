(function(){

var app = angular.module('store', [ ]);

app.controller('StoreController', function(){
	this.products = gems;
});

var gems = [
	{
		name: "Dodecadron",
		price: 2.95,
		description: "This is the best gem ever.",
		canPurchase: false,
		soldOut: false
	},
	{
		name: "Pentagonal Gem",
		price: 5.95,
		description: "Or this?? It's bigger",
		canPurchase: true,
		soldOut: false
	}
]
})();