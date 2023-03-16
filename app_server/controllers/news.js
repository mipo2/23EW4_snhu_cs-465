/* GET news view */
const news = (req, res) => {
    res.render('news', { title: 'Travlr Getaways', path: "news" });
};

module.exports = {
    news
};