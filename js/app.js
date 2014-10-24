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

app.controller('ReviewController', function(){
	this.review = {};
	this.addReview = function(product){
		product.reviews.push(this.review);
		this.review = {};
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
		soldOut: false,
		reviews: [
			{
	        	stars: 5,
		        body: "I love this gem!",
		        author: "joe@example.org",
		        createdOn: 1397490980837
	    	}, {
		        stars: 1,
		        body: "This gem sucks.",
		        author: "tim@example.org",
		        createdOn: 1397490980837
	    	}
		]
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
		soldOut: false,
		reviews: [
			{
		        stars: 3,
		        body: "I think this gem was just OK, could honestly use more shine, IMO.",
		        author: "JimmyDean@example.org",
		        createdOn: 1397490980837
	      	}, {
		        stars: 4,
		        body: "Any gem with 12 faces is for me!",
		        author: "gemsRock@example.org",
		        createdOn: 1397490980837
		    }

		]
	}
]
})();