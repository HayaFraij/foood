const express = require("express");
const cors = require("cors");

var router = express.Router();

const mongo =require ("../db-food/post-db")


/////////////////////
router.get('/', (req, res) => {
  res.send("post router");
});

///////////creatdefult
router.get('/defult', (req, res) => {
  mongo.creatdefult((result) => {
    res.json(result);
  })
});

router.post('/posts', (req, res) => {
  let newUser = req.body;

  mongo.create(newUser, (result) => {
      res.json(result);
  })
});
<<<<<<< HEAD

////////////newpost
router.post('/:namefood/:description/:location/:booking', (req, res) => {
 
  let namefood = encodeURIComponent(req.params.namefood);
  let description = encodeURIComponent(req.params.description);
  let location = encodeURIComponent(req.params.location);
  let booking = encodeURIComponent(req.params.booking);


  console.log("helloooooooooooooooooooo server");
  console.log("server",namefood,description,location,booking);
 
  mongo.newpost((result) => {
     res.json(result);
   },namnamefoode,description,location,booking)
});



=======
>>>>>>> 968b97c46c0a59060a0c4b8887d7cb050fa664c7

/////////getallpost
router.get('/all', (req, res) => {
mongo.getallpost((result) => {
   res.json(result);
 }) 
 });
 //////////Post
 router.post('/post',(req,res)=>{
   console.log('req.body', req.body)
   let newPost=req.body;
   mongo.creatpost(newPost, result => {
     console.log('result', result)
    res.send(result);
  });
});

/////////updatepost
router.put('/:bookedup', (req, res) => {

  let bookedup = encodeURIComponent(req.params.bookedup);
  console.log("update",bookedup)

  mongo.updatepost((result) => {
    res.json(result);
  },bookedup)
});



module.exports = router;









