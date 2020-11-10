const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser')
const mongoose = require('mongoose');
require('mongoose-type-email');
app.use(bodyParser.urlencoded({ extended: false }))
mongoose.connect('mongodb+srv://user1:1234@cluster0.cgoi5.mongodb.net/college', {useNewUrlParser: true, useUnifiedTopology: true});
const Student = mongoose.model('Student',
{
   firstname: String,
   lastname: String,
   mailid: mongoose.SchemaTypes.Email,
   password: String,
   college: String,
   department :String,
   batch:String
});


app.post('/', function (req, res) {
const newstudent = new Student(
  {
    firstname: req.body.firstname,
    lastname:req.body.lastname ,
    mailid: req.body.mailid,
    password: req.body.password,
    college:req.body.college,
    department :req.body.department,
    batch:req.body.batch
    });
    newstudent.save();

res.send('POST request to the homepage')

})
app.get('/', (req, res) => {
  Student.find(function (err, foundData){
    res.send(foundData)
  })
})


  app.delete('/',function(req, res){

    Student.deleteMany(
        {firstname: req.body.firstname},
      function(err){
        if (!err){
          res.send("Successfully deleted the corresponding article.");
        } else {
          res.send(err);
        }
      }
    );
  });


app.put('/',function (req,res){
  Student.update(
    {firstname: req.body.firstname},
    {
      firstname: req.body.firstname,
      lastname:req.body.lastname ,
      mailid: req.body.mailid,
      password: req.body.password,
      college:req.body.college,
      department :req.body.department,
      batch:req.body.batch
    },
    {overwrite: true},
    function(err){
      if(!err){
        res.send("Successfully updated the selected article.");
      }
    }
  )
})


app.listen(port, function()  {
  console.log(`server started`)
})
