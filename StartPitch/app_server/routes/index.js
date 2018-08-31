var express = require('express');
var router = express.Router();
CtrlUsers = require('../controllers/users.js')
CtrlAuth = require('../controllers/authentication.js')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/users', function(req, res, next){
  CtrlUsers.usersReadAll();
})

router.put('/users/:userid', function(req, res, next){
  userid = req.params.userid
  CtrlUsers.usersUpdateOne(userid);
})

router.delete('/users/:userid', function(req, res, next){
  userid = req.params.userid
  CtrlUsers.usersDeleteOne(userid);
})

router.post('/register', function(req, res, next){
  CtrlAuth.register(res,req.body.name, req.body.email, req.body.password, req.body.passwordconf);
})

router.post('/login', function(req, res, next){
  CtrlAuth.login(req,res, next);
})

module.exports = router;
