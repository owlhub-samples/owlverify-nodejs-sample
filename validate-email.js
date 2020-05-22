// Load the OWLHUB SDK for Node.js
var OWLHUB = require("owlhub-sdk")

OWLHUB.config.loadFromPath('./config.json');

var OwlVerify = new OWLHUB.OwlVerify({apiVersion: '2020-05-10'});

(async () => {
  try {
    var res = await OwlVerify.validateEmail({
      Email: 'hello@example.com'
    }).promise();

    console.log(res)
  }catch (e) {
    console.log('error')
    console.log(e)
  }
})();
