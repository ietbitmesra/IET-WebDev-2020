const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
 
// app.get("*", function(req, res) {
//   res.send("404 Not found");
// });

// app.get('/', function (req, res) {
//   res.send('Bye World');
// });

app.get('/', function (req, res) {
  res.send('Hello World');
});

function fib(n) {
  if(n<0) 
    return -1;
  if(n==0)
    return 0;
  if(n==1 || n==2)
    return 1;
  return fib(n-1) + fib(n-2);
}

app.post('/fib/:num',function(req, res) {
  let num = req.params.num;
  num = Number(num);
  const val = fib(num);
  res.json({value: val});
});

app.get('/name', function(req, res) {
  res.send("<h1>IET</h1>")
});

app.get('/json', function(req, res) {
  res.json({
    name: "Sanskar",
    batch: "k17"
  });
});

app.get('/profile/:name', function(req, res) {
  const name = req.params.name;
  res.send("Hi "+name);
});

app.get("*", function(req, res) {
  res.send("404 Not found");
});

app.listen(3000, function() {
    console.log("Server Running on PORT 3000");
});