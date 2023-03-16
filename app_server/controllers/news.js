var fs = require('fs');

var newsElements = JSON.parse(fs.readFileSync('./data/news.json', 'utf-8'));

/* GET news view */
const news = (req, res) => {
    res.render('news', { title: 'Travlr Getaways', path: "news", newsElements });
};

module.exports = {
    news
};