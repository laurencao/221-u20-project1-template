function candyBrand(name, recommendation, purchaseURL, pictureURL){
    this.name = name;
    this.recommendation = recommendation;
    this.purchaseURL = purchaseURL;
    this.pictureURL = pictureURL;
}

exports.createBrand = function(name, recommendation, purchaseURL, pictureURL){
    return new candyBrand(name, recommendation, purchaseURL, pictureURL);
};
  
console.log("Brand Model is up and running!");
