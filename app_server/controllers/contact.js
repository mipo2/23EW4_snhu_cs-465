var fs = require('fs');

var contactDetails = JSON.parse(fs.readFileSync('./data/contact.json', 'utf-8'));

/* GET contact view */
const contact = (req, res) => {
    res.render('contact', { title: 'Travlr Getaways', path: "contact", contactDetails });
};

module.exports = {
    contact
};