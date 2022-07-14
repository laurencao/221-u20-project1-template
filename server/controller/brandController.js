const candyBrand = require("../model/candyBrand");
console.log("Brand Controller is up and running!");

let candies = [];

let brand1 = candyBrand.createBrand("Haribro", "As the #1 gummy candy brand, it is safe to say that Haribo's secret formula has everyone grabbing a bag of their favorite sweet treat. From the Classic Goldbears to the sweet Happy Cola, there is a different candy for everyone in the family from Haribo. ", "https://amzn.to/3nYnIy7", "https://bit.ly/3c3FVHL");
let brand2 = candyBrand.createBrand("Black Forest", "As a healthier alternative, Black Forest Gummy Bears are perfect for an organic and gluten free sweet treat. The ingredients are carefully chosen, making soft, chewy, fruit flavored gummies. ", "https://amzn.to/3uEEh5Z", "https://bit.ly/3nVZ1lQ");
let brand3 = candyBrand.createBrand("Albanese", "With the widest variety of flavors, Albanese is perfect for anyone who cannot chose what flavors they want. Along with the widest variety of flavors, Albanese also had an extrememly wide variety of gummy types, like Peach Rings and Gummy Jet Fighters. ", "https://amzn.to/3O1kPqY", "https://bit.ly/3uJmSsO "); 
let brand4 = candyBrand.createBrand("Trolli", "Similar to Haribo, Trolli is one of the most popular gummy brands, except Trolli is known for their flavorful sour gummies. With their signature neon color gummies, Trolli has perfected the misture of sweet and sour gummy bears, worms, octopus, and much much more.", "https://amzn.to/3z1JPKs", "https://bit.ly/3yBuy1p");

candies.push(brand1);
candies.push(brand2);
candies.push(brand3);
candies.push(brand4);

exports.getBrands = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send(candies);
}

exports.saveBrand = function(req, res) {
	let newBrand = candyBrand.createBrand(req.body.name, req.body.recommendation, req.body.purchaseURL, req.body.pictureURL);
	candies.push(newBrand);
	res.setHeader('Content-Type', 'application/json');
	res.send(candies);
}

exports.getBrand = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
    res.send(candies[req.params.Brandid]);
}

exports.deleteBrand = function(req, res) {
	candies.splice(req.params.Brandid, 1);
	res.setHeader('Content-Type', 'application/json');
	res.send(candies);
}

exports.updateBrand = function(req, res) {
	// get the existing brand from the array
	var updatedBrand = candies[req.params.Brandid];

	// check to see what has been passed and update the local copy
	if(req.body.name)
		updatedBrand.name = req.body.name;
	if(req.body.recommendation)
		updatedBrand.recommendation = req.body.recommendation;
	if(req.body.purchaseURL)
		updatedBrand.purchaseURL = req.body.purchaseURL;
	if(req.body.pictureURL)
		updatedBrand.pictureURL = req.body.pictureURL;
	// save the local copy of the brand back into the array
	candies[req.params.Brandid] = updatedBrand;

	res.setHeader('Content-Type', 'application/json');
	res.send(candies[req.params.Brandid]);
}
