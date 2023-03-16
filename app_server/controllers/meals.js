var fs = require('fs');

var purchasableMeals = JSON.parse(fs.readFileSync('./data/meals.json', 'utf-8'));

/* GET meals view */
const meals = (req, res) => {
    res.render('meals', { title: 'Travlr Getaways', path: "meals", purchasableMeals });
};

module.exports = {
    meals
};