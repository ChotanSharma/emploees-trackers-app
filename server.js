const inquirer = require('inquirer');
const Query = require('./lib/Query');

const express = require("express");
const routes = require("./controllers");
const sequelize = require("./config/connection");
const path = require('path');
// helper functions
const helpers = require("./utils/helpers");

// handlebars
const exphbs = require("express-handlebars");
const hbs = exphbs.create({ helpers });

// session (connects session to sequelize Database)
const session = require("express-session");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

const SequelizeStore = require("connect-session-sequelize")(session.Store);

// creating session
const sess = {
  secret: "super secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening on http://localhost:"+PORT));
});