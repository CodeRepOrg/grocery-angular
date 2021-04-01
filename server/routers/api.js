const express = require('express');
const db = require('./dao');

module.exports = function(app) {
  const router = express.Router();

  router.get('/', function (req, res, next) {
    res.json({status: 'api'});
  });

  router.post('/insert', (req, res) => {
      res.json({ err: false, msg: 'inserted' })
  });
  router.get('/list', (req, res) => {
    db.query()
        .then(data => {
            console.log(data)
            res.json({ err: false, msg: data.rows })
        })
        .catch(err => {
            console.error(err);
            res.json({ err: true, msg: [] })
        });
  });
  router.post('/clean', (req, res) => {
      res.json({ err: false, msg: 'deletes' })
  });

  app.use("/api", router);
}



