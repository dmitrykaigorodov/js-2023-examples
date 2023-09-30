
import express from "express";
const app = express();
let mustacheExpress = require('mustache-express');

app.set('view engine', 'mustache');
app.engine('mustache', mustacheExpress());
app.use(express.static('static'))

const port = 8080;

app.get("/", (req, res) => {
  res.send(`
  <h1>Hello World!</h1>
  <form>
   <input placeholder='Your name' />
  </form>
  `)
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});