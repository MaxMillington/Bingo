'use strict'
var express = require('express');
var bodyParser = require('body-parser');
require('dotenv').load()

const app = express();
const  router = express.Router();
const port = process.env.API_PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

router.get('/', function(req, res) {
  res.json({ message: 'API Initialized!'});
});

router.route('/bingo')
  .post(function(req, res) {
    const boards = req.body.boards;
    const numbersCalled = req.body.numbers;
    let bingo = false;
    boards.forEach((board) => {
      const commonNumbers = board.filter((n) => numbersCalled.includes(n))
      if (commonNumbers.length === board.length) {
        bingo = true
      }
    })
    res.json({ bingo: bingo })
  });

router.route('/balls')
  .post(function(req, res) {
    const numbersCalled = req.body.numbers;
    const getRandomIndex = (usedIndices, maxIndex) => {
      let min = 0;
      let max = maxIndex - 1;
      let index = Math.floor(Math.random()*(max-min+1)+min);

      while(usedIndices.indexOf(index) > -1) {
        if (index < max) {
          index++;
        } else {
          index = 0;
        }
      }

      return index;
    }
    const nextNumber = getRandomIndex(numbersCalled, 100)
    numbersCalled.push(nextNumber)
    res.json({ nextBall: nextNumber, numbersCalled: numbersCalled })
  });

app.use('/api', router);

app.listen(port, function() {
  console.log(`api running on port ${port}`);
});