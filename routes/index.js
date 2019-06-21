var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/vueForm", function(req, res, next){
  console.log("msg = " + req.query.msg);
  console.log("multiMsg = " + req.query.multiMsg);
  console.log("c1 = " + req.query.c1);
  console.log("radio1 = " + req.query.radio1)
  console.log("radio2 = " + req.query.radio2)
  console.log("radio2 = " + req.query.radio3)
  console.log("selected = " + req.query.select)
  console.log("multiSelected = " + req.query.multiSelect)
  res.render("index", {title:"submit succeed."})
})

module.exports = router;
