const fetch = require('node-fetch');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

const url = ' http://data.fixer.io/api/latest?access_key=3a6bfc4cee20e19bca58d79385271674';


app.post('/eurChange', (req, res) => {

    console.log(req.body)
    let = moneyToChange = req.body;
    console.log(moneyToChange);

    fetch(url)
        .then(res => res.json())
        .then(json => {

            console.log(` ${(moneyToChange.money) * (json.rates.ILS)}`)
            let newRate = {
                ILS: ((moneyToChange.money) * (json.rates.ILS)).toFixed(2),
                EUR: ((moneyToChange.money) * (json.rates.EUR)).toFixed(2),
                USD: ((moneyToChange.money) * (json.rates.USD)).toFixed(2),
                GBP: ((moneyToChange.money) * (json.rates.GBP)).toFixed(2),
            };
            console.log(newRate);

            res.send({ newRate });

        });


})
app.post('/eurChange', (req, res) => {

    console.log(req.body)
    let = moneyToChange = req.body;
    console.log(moneyToChange);

    fetch(url)
        .then(res => res.json())
        .then(json => {

            console.log(` ${(moneyToChange.money) * (json.rates.ILS)}`)
            let newRate = {
                ILS: ((moneyToChange.money) * (json.rates.ILS)).toFixed(2),
                EUR: ((moneyToChange.money) * (json.rates.EUR)).toFixed(2),
                USD: ((moneyToChange.money) * (json.rates.USD)).toFixed(2),
                GBP: ((moneyToChange.money) * (json.rates.GBP)).toFixed(2),
            };
            console.log(newRate);

            res.send({ newRate });

        });


})
app.post('/ilsChange', (req, res) => {
    let = moneyToChangeILS = req.body;

    fetch(url)
        .then(res => res.json())
        .then(json => {

            let newRate = {
                ILS: ((moneyToChangeILS.money)),
                EUR: ((moneyToChangeILS.money) *((json.rates.EUR) /(json.rates.ILS))).toFixed(2),
                USD: (((moneyToChangeILS.money) * (json.rates.USD))/(json.rates.ILS)).toFixed(2),
                GBP: (((moneyToChangeILS.money) * (json.rates.GBP))/(json.rates.ILS)).toFixed(2),
            };
            console.log(newRate);

            res.send({ newRate });

        });


})
app.post('/usdChange', (req, res) => {
    let = moneyToChange = req.body;

    fetch(url)
        .then(res => res.json())
        .then(json => {

            let newRate = {
                ILS: ((moneyToChange.money)*((json.rates.ILS) /(json.rates.USD))).toFixed(2),
                EUR: ((moneyToChange.money) *((json.rates.EUR) /(json.rates.USD))).toFixed(2),
                USD: (moneyToChange.money),
                GBP: (((moneyToChange.money) * (json.rates.GBP))/(json.rates.USD)).toFixed(2),
            };
            console.log(newRate);

            res.send({ newRate });

        });


})
app.post('/gbpChange', (req, res) => {
    let = moneyToChange = req.body;

    fetch(url)
        .then(res => res.json())
        .then(json => {

            let newRate = {
                ILS: ((moneyToChange.money)*((json.rates.ILS) /(json.rates.GBP))).toFixed(2),
                EUR: ((moneyToChange.money) *((json.rates.EUR) /(json.rates.GBP))).toFixed(2),
                USD: ((moneyToChange.money) *((json.rates.USD) /(json.rates.GBP))).toFixed(2),
                GBP: (moneyToChange.money)
            };
            console.log(newRate);

            res.send({ newRate });

        });


})








let port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log('we are on', port)
})