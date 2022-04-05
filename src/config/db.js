const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/Covid');

const connection = mongoose.connection;

connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', async function () {

  const collection  = connection.db.collection("Covid_collection");
  collection.find({}).toArray(async function(err, data){
      console.log(data); // it will print your collection data
      const res="Completed"
  });
  if(res==="res") connection.close()
});
console.log("Done")