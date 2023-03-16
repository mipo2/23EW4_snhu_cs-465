var fs = require('fs');

var bookableRooms = JSON.parse(fs.readFileSync('./data/rooms.json', 'utf-8'));

/* GET rooms view */
const rooms = (req, res) => {
    res.render('rooms', { title: 'Travlr Getaways', path: "rooms", bookableRooms });
};

module.exports = {
    rooms
};