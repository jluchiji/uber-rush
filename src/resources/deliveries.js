/**
 * resources/deliveries.js
 *
 * @author  Denis Luchkin-Zhou <wyvernzora@gmail.com>
 * @license MIT
 */


module.exports = {

  create: {
    method: 'POST',
    path: '/deliveries',
    params: [ 'quote_id', 'pickup', 'dropoff' ],

    pre: require('../hooks/pre')
  },

  list: {
    method: 'GET',
    path: '/deliveries',

    pre: require('../hooks/pre')
  },

  get: {
    method: 'GET',
    path: '/deliveries/:id',
    params: ['id'],

    pre: require('../hooks/pre')
  },

  cancel: {
    method: 'POST',
    path: '/deliveries/:id/cancel',
    params: ['id'],

    pre: require('../hooks/pre')
  }

};
