/**
 * hooks/oncreate.js
 *
 * @author  Denis Luchkin-Zhou <wyvernzora@gmail.com>
 * @license MIT
 */


function oncreate() {

  /* Reconfigure for sandbox environment if so configured */
  if (this.config$.sandbox) {
    this.config$.root = 'https://sandbox-api.uber.com/v1';
    this.config$.scope = 'delivery_sandbox';
  }

}
module.exports = oncreate;
