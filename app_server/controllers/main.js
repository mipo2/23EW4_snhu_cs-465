/* GET homepage */
const index = (req, res) => {
    res.render('index', {title: 'Travlr Getaways', path: "" });
};

module.exports = {
    index
};