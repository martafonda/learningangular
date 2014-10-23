(function(){

var app = angular.module('store', [ ]);

app.controller('StoreController', function(){
	this.products = gems;
});

app.controller('PanelController', function(){
	this.tab = 1;
	this.selectTab = function(setTab){
		this.tab = setTab;
	};
	this.isSelected = function(checkTab){
		return this.tab === checkTab
	};
});

var gems = [
	{
		name: "Dodecahedron",
		price: 2.95,
		description: "This is the best gem ever.",
		images:{
			full: "images/dodecahedrongem.jpg",
			thumbs: ["images/gem3.png", "images/gem5.png"]
		},
		canPurchase: true,
		soldOut: false
	},
	{
		name: "Other Gem",
		price: 2.55,
		description: "Or this?? I don't know!",
		images:{
			full: "images/pentagonalgem.jpg",
			thumbs:["images/gem1.png", "images/gem4.png"]
		},	
		canPurchase: true,
		soldOut: false
	}
]
})();