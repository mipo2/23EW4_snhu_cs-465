/* GET rooms view */
const rooms = (req, res) => {
    res.render('rooms', { title: 'Travlr Getaways', path: "rooms" });
};

module.exports = {
    rooms
};