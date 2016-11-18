/**
 * resources/quote.js
 *
 * @author  Denis Luchkin-Zhou <wyvernzora@gmail.com>
 * @license MIT
 */


module.exports = {

  create: {
    method: 'POST',
    path: '/deliveries/quote',
    params: [ 'pickup', 'dropoff' ],

    pre: require('../hooks/pre.js'),
    post(res) {
      res.body = res.body.quotes;
    }
  }

};
