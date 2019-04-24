module.exports = (app) => {
    app.get('/', function (req, res) {
        //res.sendFile('index.html', {root : __dirname + '/views'});
        res.render('index.html')
    });
}