var express = require('express');
var router = express.Router();

var db = require('../models/index');

var sequelize = db.sequelize;
const { QueryTypes } = require("sequelize");

/* GET home page. */
router.get('/', async(req, res, next)=> {
  res.render('main');
});

module.exports = router;
