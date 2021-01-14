require('./models/User');
require('./models/Track');
const express = require("express");
const mongoose = require("mongoose");
const requireAuth = require('./middlewares/requireAuth');
const authRoutes = require('./routes/authRoutes');
const trackRoutes = require('./routes/trackRoutes');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

// app.use('/', authRoutes);

// app.use(trackRoutes);

const mongoUri =
  "mongodb+srv://admin:passwordpassword@cluster0.i7auj.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Connected to mongo Instance');
})

mongoose.connection.on('error', (err) => {
console.log('Error connecting to mongo', err);
})

// app.get("/", requireAuth, (req, res) => {
//   res.send(`Your email is ${req.user.email}`);
// });

app.get("/", (req, res) => {
  res.send(`This is Home Page`);
});

app.listen(3000, () => console.log(`Listening on port no 3000`));
