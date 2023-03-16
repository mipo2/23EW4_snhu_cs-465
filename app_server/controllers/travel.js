var fs = require('fs');

var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf-8'));

/* GET travel view */
const travel = (req, res) => {
    res.render('travel', { title: 'Travlr Getaways', path: "travel", trips });
};

module.exports = {
    travel
};