/**
 * index.js
 *
 * @author  Denis Luchkin-Zhou <wyvernzora@gmail.com>
 * @license MIT
 */
const RestKit      = require('rest-kit');


module.exports = RestKit({

  root:            'https://api.uber.com/v1',
  scope:           'delivery',
  sandbox:         false

}, {

  required:        [ 'clientId', 'secret', 'sandbox' ],
  oncreate:        require('./hooks/oncreate')

}, {

  token:           RestKit.Resource(require('./resources/token')),
  quotes:          RestKit.Resource(require('./resources/quotes')),
  deliveries:      RestKit.Resource(require('./resources/deliveries'))

});
