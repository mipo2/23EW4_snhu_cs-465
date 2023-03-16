/* GET contact view */
const contact = (req, res) => {
    res.render('contact', { title: 'Travlr Getaways', path: "contact" });
};

module.exports = {
    contact
};