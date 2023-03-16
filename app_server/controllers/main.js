var fs = require('fs');

var indexElements = JSON.parse(fs.readFileSync('./data/index.json', 'utf-8'));

/* GET homepage */
const index = (req, res) => {
    res.render('index', {title: 'Travlr Getaways', path: "", indexElements });
};

module.exports = {
    index
};