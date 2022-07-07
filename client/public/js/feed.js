document.getElementById("portal_button").addEventListener("click", ()=> goToLocation("https://youtu.be/astISOttCQ0") );

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
let displayItem = function(feedview) {
    document.getElementById(("newsfeed")).innerHTML +=
    "<div> <h2>" + feedview.title + "</h2> <img class = feedImage src = " + feedview.imageURL + "></img> <br/ ><p>" + feedview.body + "</p><a href = " + feedview.linkURL + ">Click here to find out more!</a> <hr/> </div>";
}

window.addEventListener("load", ()=> {
    for(var i = 0; i < currentStories.length; i++) {
        displayItem(currentStories[i]);
    }
});