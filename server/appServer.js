const express = require('express');
const bodyParser = require('body-parser');
const feedController = require('./controller/feedController');
const brandController = require('./controller/brandController');
const app = express();

app.use(bodyParser.json({type:'application/json'}));
app.use(express.static('client/public'));

///makes routes for each method to send to the API feed
app.route('/api/FIs')
	.get((req, res) => {
        feedController.getFIs(req, res);
    })
	.post((req, res) => {
        feedController.saveFI(req, res);
    })
app.route('/api/FIs/:FIid')
	.get((req, res) => {
        feedController.getFI(req, res);
    })
	.delete((req, res) => {
        feedController.deleteFI(req, res);
    })
	.patch((req, res) => {
        feedController.updateFI(req, res);
    })
    .put((req, res) => {
        feedController.fullUpdateFI(req, res);
    })
///makes routes for each method to send to the API feed
app.route('/api/Brands')
	.get((req, res) => {
        brandController.getBrands(req, res);
    })
	.post((req, res) => {
        brandController.saveBrand(req, res);
    })
app.route('/api/Brands/:Brandid')
	.get((req, res) => {
        brandController.getBrand(req, res);
    })
	.delete((req, res) => {
        brandController.deleteBrand(req, res);
    })
	.patch((req, res) => {
        brandController.updateBrand(req, res);
    })
    .put((req, res) => {
        brandController.fullUpdateBrand(req, res);
    })

app.get('/', function(req, res) {
    res.sendFile('index.html', {root: './client/views'})
});
app.get('/feed', function(req, res) {
    res.sendFile('feed.html', {root: './client/views'})
});

app.listen(1337, () => console.log('Listening on port 1337.'));
