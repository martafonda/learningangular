(function(){

var app = angular.module('store', [ ]);

app.controller('StoreController', function(){
	this.products = gems;
});

var gems = [
	{
		name: "Dodecahedron",
		price: 2.95,
		description: "This is the best gem ever.",
		images:{
			full: "dodecahedrongem.jpg",
			thumbs: ["gem3.png", "gem5.png"]
		},
		canPurchase: true,
		soldOut: false
	},
	{
		name: "Other Gem",
		price: 2.55,
		description: "Or this?? I don't know!",
		images:{
			full: "pentagonalgem.jpg",
			thumbs:["gem1.png", "gem4.png"]
		},	
		canPurchase: true,
		soldOut: false
	}
]
})();