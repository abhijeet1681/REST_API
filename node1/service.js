function greeting(req, res) {
    var fn = req.query.firstname;
    res.send("Greetings" + fn);
    }
    function additon(req, res) {
    var n1 = req.body.num1,
    n2 = req.body.num2,
    sum = parseInt(n1) + parseInt(n2);
    res.send(n1 + ' + ' + n2 + ' is equal to ' + sum);}
    var attachService = function (app) {
    app.get('/abhijeet',greeting);
    app.post('/add', additon);
};
exports.attachService = attachService;
