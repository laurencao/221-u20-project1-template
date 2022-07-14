///creates the candyBrand function with name, body, purchaseURL and pictureURL
function candyBrand(name, recommendation, purchaseURL, pictureURL){
    this.name = name;
    this.recommendation = recommendation;
    this.purchaseURL = purchaseURL;
    this.pictureURL = pictureURL;
}

exports.createBrand = function(name, recommendation, purchaseURL, pictureURL){
    return new candyBrand(name, recommendation, purchaseURL, pictureURL);
};
///returns "brand model is up and running!" if everything is working
console.log("Brand Model is up and running!");
