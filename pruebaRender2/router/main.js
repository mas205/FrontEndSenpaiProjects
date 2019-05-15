module.exports = (app) => {
    app.get('/', function (req, res) {
        //res.sendFile('index.html', {root : __dirname + '/views'});
        res.redirect('/transformed')
    });
    app.get('/decorated', function (req, res) {
        //res.sendFile('index.html', {root : __dirname + '/views'});
        res.render('index2.html')
    });
    app.get('/transformed', function (req, res) {
        //res.sendFile('index.html', {root : __dirname + '/views'});
        res.render('index.html')
    });
}