/* GET travel view */
const travel = (req, res) => {
    res.render('travel', { title: 'Travlr Getaways', path: "travel" });
};

module.exports = {
    travel
};