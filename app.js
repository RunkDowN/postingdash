var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.render('index');
});

app.post('/save-settings', function (req, res) {
    var reqData = req.body.settings;

    fs.readFile('storage/data.json', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
            var obj = JSON.parse(data);
            obj.settings = reqData;

            json = JSON.stringify(obj);

            fs.writeFile('storage/data.json', json, 'utf8');
        }
    });
});

app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
});