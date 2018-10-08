const express = require('express');
var bodyParser = require('body-parser');
const os = require('os');

const app = express();
app.use(bodyParser());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json()); 

app.use(express.static('dist'));
app.get('/api/user', (req, res) => {
    let user = {
        firstname: "John",
        lastname: "Doe",
        company: "Startup Inc",
        username: "johndoe",
        email: "johndoe@gmail.com",
        address: "sunset road 56",
        photo: "johndoe.png",
        city: "Bali",
        country: "Indonesia",
        postcode: 23434 
    }
    res.send(user);
});

app.get('/api/settings', (req, res) => {
    let settings = {
        company: "Startup Inc",
        email: "startup@inc.com",
        address: "Sunset Road 56",
        city: "Bali",
        country: "Indonesia",
        postcode: 23434 
    }
    res.send(settings);
});

app.listen(8095, () => console.log('Listening on port 8095!'));



