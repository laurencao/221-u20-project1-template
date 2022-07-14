///creates function called feedItem with the items
function feedItem(title, story, linkURL, imageURL){
  this.title = title;
  this.story = story;
  this.linkURL = linkURL;
  this.imageURL = imageURL;
};

exports.createFI = function(title, story, linkURL, imageURL){
return new feedItem(title, story, linkURL, imageURL);
};
///says "feed model is up and running!" if everything is working
console.log("Feed Model is up and running!");
