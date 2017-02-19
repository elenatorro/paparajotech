/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var cardRouter = express.Router();

  cardRouter.get('/', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send({
      data: [
          {
            id: 1,
            type: 'card',
            attributes: {
              name: 'alpaca',
              meta: {}
            }
          },
          {
            id: 2,
            type: 'card',
            attributes: {
              name: 'anteater',
              meta: {}
            }
          },
          {
            id: 3,
            type: 'card',
            attributes: {
              name: 'bat',
              meta: {}
            }
          },
          {
            id: 4,
            type: 'card',
            attributes: {
              name: 'beetle',
              meta: {}
            }
          },
          {
            id: 5,
            type: 'card',
            attributes: {
              name: 'butterfly',
              meta: {}
            }
          },
          {
            id: 6,
            type: 'card',
            attributes: {
              name: 'camel',
              meta: {}
            }
          },
          {
            id: 7,
            type: 'card',
            attributes: {
              name: 'cat',
              meta: {}
            }
          },
          {
            id: 8,
            type: 'card',
            attributes: {
              name: 'chameleon',
              meta: {}
            }
          },
          {
            id: 9,
            type: 'card',
            attributes: {
              name: 'cobra',
              meta: {}
            }
          },
          {
            id: 10,
            type: 'card',
            attributes: {
              name: 'cow',
              meta: {}
            }
          },
          {
            id: 11,
            type: 'card',
            attributes: {
              name: 'crab',
              meta: {}
            }
          },
          {
            id: 12,
            type: 'card',
            attributes: {
              name: 'crocodile',
              meta: {}
            }
          },
          {
            id: 13,
            type: 'card',
            attributes: {
              name: 'dog',
              meta: {}
            }
          },
          {
            id: 14,
            type: 'card',
            attributes: {
              name: 'duck',
              meta: {}
            }
          },
          {
            id: 15,
            type: 'card',
            attributes: {
              name: 'elephant',
              meta: {}
            }
          },
          {
            id: 16,
            type: 'card',
            attributes: {
              name: 'elk',
              meta: {}
            }
          },
          {
            id: 17,
            type: 'card',
            attributes: {
              name: 'fish',
              meta: {}
            }
          },
          {
            id: 18,
            type: 'card',
            attributes: {
              name: 'frog',
              meta: {}
            }
          },
          {
            id: 19,
            type: 'card',
            attributes: {
              name: 'giraffe',
              meta: {}
            }
          },
          {
            id: 20,
            type: 'card',
            attributes: {
              name: 'hen',
              meta: {}
            }
          },
          {
            id: 21,
            type: 'card',
            attributes: {
              name: 'hippopotamus',
              meta: {}
            }
          },
          {
            id: 22,
            type: 'card',
            attributes: {
              name: 'kangaroo',
              meta: {}
            }
          },
          {
            id: 23,
            type: 'card',
            attributes: {
              name: 'macaw',
              meta: {}
            }
          },
          {
            id: 24,
            type: 'card',
            attributes: {
              name: 'monkey',
              meta: {}
            }
          },
          {
            id: 25,
            type: 'card',
            attributes: {
              name: 'mouse',
              meta: {}
            }
          },
          {
            id: 26,
            type: 'card',
            attributes: {
              name: 'octopus',
              meta: {}
            }
          },
          {
            id: 27,
            type: 'card',
            attributes: {
              name: 'ostrich',
              meta: {}
            }
          },
          {
            id: 28,
            type: 'card',
            attributes: {
              name: 'owl',
              meta: {}
            }
          },
          {
            id: 29,
            type: 'card',
            attributes: {
              name: 'panda',
              meta: {}
            }
          },
          {
            id: 30,
            type: 'card',
            attributes: {
              name: 'pelican',
              meta: {}
            }
          },
          {
            id: 31,
            type: 'card',
            attributes: {
              name: 'penguin',
              meta: {}
            }
          },
          {
            id: 32,
            type: 'card',
            attributes: {
              name: 'pig',
              meta: {}
            }
          },
          {
            id: 33,
            type: 'card',
            attributes: {
              name: 'rabbit',
              meta: {}
            }
          },
          {
            id: 34,
            type: 'card',
            attributes: {
              name: 'raccoon',
              meta: {}
            }
          },
          {
            id: 35,
            type: 'card',
            attributes: {
              name: 'rhinoceros',
              meta: {}
            }
          },
          {
            id: 36,
            type: 'card',
            attributes: {
              name: 'seaCow',
              meta: {}
            }
          },
          {
            id: 37,
            type: 'card',
            attributes: {
              name: 'shark',
              meta: {}
            }
          },
          {
            id: 38,
            type: 'card',
            attributes: {
              name: 'sheep',
              meta: {}
            }
          },
          {
            id: 39,
            type: 'card',
            attributes: {
              name: 'sloth',
              meta: {}
            }
          },
          {
            id: 40,
            type: 'card',
            attributes: {
              name: 'snake',
              meta: {}
            }
          },
          {
            id: 41,
            type: 'card',
            attributes: {
              name: 'spider',
              meta: {}
            }
          },
          {
            id: 42,
            type: 'card',
            attributes: {
              name: 'squirrel',
              meta: {}
            }
          },
          {
            id: 43,
            type: 'card',
            attributes: {
              name: 'stingray',
              meta: {}
            }
          },
          {
            id: 44,
            type: 'card',
            attributes: {
              name: 'swan',
              meta: {}
            }
          },
          {
            id: 45,
            type: 'card',
            attributes: {
              name: 'tiger',
              meta: {}
            }
          },
          {
            id: 46,
            type: 'card',
            attributes: {
              name: 'tortoise',
              meta: {}
            }
          },
          {
            id: 47,
            type: 'card',
            attributes: {
              name: 'toucan',
              meta: {}
            }
          },
          {
            id: 48,
            type: 'card',
            attributes: {
              name: 'whale',
              meta: {}
            }
          }]
      });
  });
  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/card', require('body-parser').json());
  app.use('/api/cards', require('body-parser').json(), cardRouter);
};
