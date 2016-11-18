/**
 * hooks/pre.js
 *
 * @author  Denis Luchkin-Zhou <wyvernzora@gmail.com>
 * @license MIT
 */
const Debug        = require('debug')('uber-rush:hooks:pre');


async function pre(req) {

  /* Refresh auth token if it is not present or almost expired */
  if (!this.config$.tokenExpires || Date.now() > this.config$.tokenExpires - 20000) {
    Debug('Refreshing auth token');
    const t = await this.token.create();
    req.headers.Authorization = `${t.token_type} ${t.access_token}`;
  }

}
module.exports = pre;
