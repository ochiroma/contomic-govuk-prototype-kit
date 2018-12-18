const express = require('express')
const router = express.Router() 
const request = require('request')

router.get('/test', function(req, res, next) {
  request('https://demo.contomic.com/api/v1/GovService/nodes/08119fc1f9304a25919fc1f930ba2538?version=published', function (err, response, body) {
    if (err || response.statusCode !== 200) {
      return res.sendStatus(500);
    }
    res.render('service-page', { content : JSON.parse(body) });
    // res.send({ content : JSON.parse(body) });
  });
});

module.exports = router
