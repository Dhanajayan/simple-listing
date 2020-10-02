const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const faker = require('faker');
app.use(express.static(path.join(__dirname, 'build')));

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.use(allowCrossDomain);

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/data', function (req, res) {
    let items = [];
    for(let i=1; i<=100000; i++) {
        items.push({
            "id": i,
            "is_selected": faker.random.boolean(),
            "category": faker.random.number({min:1, max:4}),
            "name": faker.name.findName(),
            "organization": faker.company.companyName(),
            "group": faker.random.number(),
            "contact_by": faker.random.number(),
            "channel": faker.random.boolean(),
            "address": faker.address.streetAddress(),
            "created": faker.date.past(),
            "last_order": faker.date.past(),
            "orders": faker.random.number(),
            "spend": '$'+ faker.random.float(),
            "owing": '$'+faker.random.float()
        })
    }
    return res.send(items);
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

console.log("Server runs in port 8080");

app.listen(process.env.PORT || 8080);