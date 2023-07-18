var express = require('express');
var router = express.Router();

var db = require('../models/index');

var sequelize = db.sequelize;
const { QueryTypes } = require("sequelize");


//포스트 게시글 목록 조회 페이지
router.get('/', async(req, res, next)=> {
    res.render('post/list');
});


//포스트 단일 게시글 조회 페이지
router.get('/view', async(req, res, next)=> {
    res.render('post/view');
});
  

//포스트 작성 페이지
router.get('/cre', async(req, res, next)=> {
  res.render('post/cre');
});


//포스트 수정 페이지
router.get('/mod', async(req, res, next)=> {
    res.render('post/mod');
});



//포스트 삭제
// router.post('/', async(req, res, next)=> {
//     res.redirect('/');
// });


module.exports = router;
