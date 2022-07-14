document.getElementById("portal_button").addEventListener("click", () => goToLocation("https://youtu.be/astISOttCQ0") );

///creates items for the feed
function feedItem(title, body, linkURL, imageURL) {
    this.title = title;
    this.body = body;
    this.linkURL = linkURL;
    this.imageURL = imageURL;
}
///makes stories with all the items
let story1 = new feedItem("Gummy Worms", "Gummy Worms are one of the best gummy candies to exists. With the half-half ratio with different flavors, you can expierence two different flavors at once, quite possibly the best thing since the creation of the telephone.", "https://foodsguy.com/best-gummy-worm-brands/", "https://foodsguy.com/wp-content/uploads/2021/10/Gummy-Worms.jpg");
let story2 = new feedItem("Gummy Bears", "Gummy Bears come to a close second, excpet they miss the beautiful intricate art that gummy worms hold. The flavors come in a wide variations, so that makes up for the missing double flavor that gummy worms have.", "https://www.gadgetreview.com/best-gummy-bears", "https://assets.bonappetit.com/photos/57d6f9779a1453c33146edea/master/pass/1280px-Gummy_bears.jpg");
let story3 = new feedItem("Gummy Fruits", "Gummy Fruits, especially watermelons, are the Worlds 8th Wonder. Absolutely jaw dropping amazing. Delicious. Deserves to be in a 5 Star Michelin restaurant. The Sour Patch Watermelons should be in the Hall of Fame.", "https://zomgcandy.com/sour-patch-watermelon/", "https://www.mastgeneralstore.com/prodimages/40962-DEFAULT-l.jpg");

let currentStories = [story1, story2, story3];

///uses funtion to display each story with corresponding body, image, and link
let displayFeedItem = function(feedview){
    document.getElementById("newsfeed").innerHTML +=
    "<div> <h2>" + feedview.title + "</h2> <img class = feedImage src = " + feedview.imageURL + "></img> <br/ ><p>" + feedview.body + "</p><a href = " + feedview.linkURL + ">Click here to find out more!</a> <hr/> </div>";
}

window.addEventListener("load", ()=> {
    for(var i = 0; i < currentStories.length; i++){
        displayFeedItem(currentStories[i]);
    }
});
///create items for candyBrand
function candyBrand(name, recommendation, purchaseURL, pictureURL){
    this.name = name;
    this.recommendation = recommendation;
    this.purchaseURL = purchaseURL;
    this.pictureURL = pictureURL;
}
///make description for each candy brand
let brand1 = new candyBrand("Haribro", "As the #1 gummy candy brand, it is safe to say that Haribo's secret formula has everyone grabbing a bag of their favorite sweet treat. From the Classic Goldbears to the sweet Happy Cola, there is a different candy for everyone in the family from Haribo. ", "https://amzn.to/3nYnIy7", "https://bit.ly/3c3FVHL");
let brand2 = new candyBrand("Black Forest", "As a healthier alternative, Black Forest Gummy Bears are perfect for an organic and gluten free sweet treat. The ingredients are carefully chosen, making soft, chewy, fruit flavored gummies. ", "https://amzn.to/3uEEh5Z", "https://bit.ly/3nVZ1lQ");
let brand3 = new candyBrand("Albanese", "With the widest variety of flavors, Albanese is perfect for anyone who cannot chose what flavors they want. Along with the widest variety of flavors, Albanese also had an extrememly wide variety of gummy types, like Peach Rings and Gummy Jet Fighters. ", "https://amzn.to/3O1kPqY", "https://bit.ly/3uJmSsO "); 
let brand4 = new candyBrand("Trolli", "Similar to Haribo, Trolli is one of the most popular gummy brands, except Trolli is known for their flavorful sour gummies. With their signature neon color gummies, Trolli has perfected the misture of sweet and sour gummy bears, worms, octopus, and much much more.", "https://amzn.to/3z1JPKs", "https://bit.ly/3yBuy1p");

let brands = [brand1, brand2, brand3, brand4];

///displays each of the brands and the corresponding information 
let displayCandyBrand = function(id, brand){
    document.getElementById((id)).innerHTML +=
    "<div> <h1>" + brand.name + "</h1> <img class = brandImage src = " + brand.pictureURL + "></img> <br/ ><p>" + brand.recommendation + "</p><a href = " + brand.purchaseURL + ">Get them here!</a> <hr/> </div>";
}

window.addEventListener("load", ()=> {
    for(var i = 0; i < brands.length; i++){
        if(i == 0) 
            displayCandyBrand("brandOne", brands[i]);
        if(i == 1) 
            displayCandyBrand("brandTwo", brands[i]);
        if(i == 2) 
            displayCandyBrand("brandThree", brands[i]);
        if(i == 3) 
            displayCandyBrand("brandFour", brands[i]);
    }
});