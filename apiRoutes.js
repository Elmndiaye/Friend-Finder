var express = require("express");
// creating a router
var router = express.Router();
//using a router top define a route
router.get('/', function (req, res) {
    res.send('api running');
   });

   router.post('/test', function (req, res) {
    res.json({
        response:"your name is " + req.body.name
    });
   });


   module.exports=router;
