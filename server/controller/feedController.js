const feedItem = require("../model/feedItem");
console.log("Controller is up and running!");

let stories = [];

let story1 = feedItem.createFI("Gummy Worms", "Gummy Worms are one of the best gummy candies to exists. With the half-half ratio with different flavors, you can expierence two different flavors at once, quite possibly the best thing since the creation of the telephone.", "https://foodsguy.com/best-gummy-worm-brands/", "https://foodsguy.com/wp-content/uploads/2021/10/Gummy-Worms.jpg");
let story2 = feedItem.createFI("Gummy Bears", "Gummy Bears come to a close second, excpet they miss the beautiful intricate art that gummy worms hold. The flavors come in a wide variations, so that makes up for the missing double flavor that gummy worms have.", "https://www.gadgetreview.com/best-gummy-bears", "https://assets.bonappetit.com/photos/57d6f9779a1453c33146edea/master/pass/1280px-Gummy_bears.jpg");
let story3 = feedItem.createFI("Gummy Fruits", "Gummy Fruits, especially watermelons, are the Worlds 8th Wonder. Absolutely jaw dropping amazing. Delicious. Deserves to be in a 5 Star Michelin restaurant. The Sour Patch Watermelons should be in the Hall of Fame.", "https://zomgcandy.com/sour-patch-watermelon/", "https://www.mastgeneralstore.com/prodimages/40962-DEFAULT-l.jpg");

stories.push(story1);
stories.push(story2);
stories.push(story3);

exports.getFIs = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send(stories);
}

exports.saveFI = function(req, res) {
	let newFI = feedItem.createFI(req.body.title, req.body.story, req.body.linkURL, req.body.imageURL);
	stories.push(newFI);
	res.setHeader('Content-Type', 'application/json');
	res.send(stories);
}

exports.getFI = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
    res.send(stories[req.params.FIid]);
}

exports.deleteFI = function(req, res) {
	stories.splice(req.params.FIid, 1);
	res.setHeader('Content-Type', 'application/json');
	res.send(stories);
}

exports.updateFI = function(req, res) {
	// get the existing FI from the array
	var updatedFI = stories[req.params.FIid];

	// check to see what has been passed and update the local copy
	if(req.body.title)
		updatedFI.title = req.body.title;
	if(req.body.story)
		updatedFI.story = req.body.story;
	if(req.body.linkURL)
		updatedFI.linkURL = req.body.linkURL;
	if(req.body.imageURL)
		updatedFI.imageURL = req.body.imageURL;
	// save the local copy of the FI back into the array
	stories[req.params.FIid] = updatedFI;

	res.setHeader('Content-Type', 'application/json');
	res.send(stories[req.params.FIid]);
}
