require('dotenv').config();
const express = require('express');
      session = require('express-session');
      massive = require('massive');
const { SESSION_SECRET, CONNECTION_STRING, SERVER_PORT } = process.env;

const app = express();

app.use(express.json());
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET
  })
);

massive(CONNECTION_STRING).then(db => {
  app.set('db', db)
  console.log('db connected')
});


app.listen(SERVER_PORT, () => console.log(`Listening on port: ${SERVER_PORT}`));


