var MongoClient = require('mongodb').MongoClient

exports.index = function(req, res){
  res.render('index', { title: 'Laptop Build' });
};

exports.save = function(req, res) {

  //create a mongo connection and save the data.
  // Connect to the db
      MongoClient.connect("mongodb://localhost/test", function (err, db) {
        //create a collection
        var collection = db.collection('data')
        collection.insert(req.body, function (err, doc) {
           console.log(doc);
      });
   });

  //res.render('index', { title: 'Laptop Build' });
  res.send("completed");
  
}

exports.list = function (req, res) {
   MongoClient.connect('mongodb://127.0.0.1/', function(err, db) {
    if(err) throw err;
    
    var collection = db.collection('data');
   
    collection.find({}).toArray(function(err, results) {
    
      
      db.close();
      results = JSON.parse(JSON.stringify(results));
      
      console.log(results);
      //render the results
      res.render('saved', { title: 'Laptop Build', results: results });
    });
 
  });
}
