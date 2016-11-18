/**
 * resources/token.js
 *
 * @author  Denis Luchkin-Zhou <wyvernzora@gmail.com>
 * @license MIT
 */


module.exports = {

  create: {
    method: 'POST',
    root: 'https://login.uber.com/oauth/v2',
    path: '/token',

    pre(req) {
      delete req.headers.Authorization;
      req.form = {
        client_id: this.config$.clientId,
        client_secret: this.config$.secret,
        grant_type: 'client_credentials',
        scope: this.config$.scope
      };
    },
    post(res) {
      this.config$.tokenExpires = res.body.expires_in * 1000 + Date.now();
      this.config$.headers.Authorization = `${res.body.token_type} ${res.body.access_token}`;
    }

  }

};
