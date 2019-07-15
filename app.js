const express = require('express')
const app = express()
const port = 3000

//app.get('/', (req, res) => res.send('Hello World!'))

app.use(express.static('public'))

const path = require('path');
const router = express.Router();
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/stylesheet/no', function (req, res) {
    res.sendFile(path.join(__dirname + '/sub/stylesheetno.html'));
});
router.get('/stylesheet/01', function (req, res) {
    res.sendFile(path.join(__dirname + '/sub/stylesheet01.html'));
});
router.get('/stylesheet/02', function (req, res) {
    res.sendFile(path.join(__dirname + '/sub/stylesheet02.html'));
});
router.get('/stylesheet/03', function (req, res) {
    res.sendFile(path.join(__dirname + '/sub/stylesheet03.html'));
});
router.get('/stylesheet/04', function (req, res) {
    res.sendFile(path.join(__dirname + '/sub/stylesheet04.html'));
});

app.use('/', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))