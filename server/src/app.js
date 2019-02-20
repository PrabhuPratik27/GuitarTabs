const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const config = require('./config');
const {sequelize} = require('./models');
const routes = require('./routes');

const app = express();

app.use(morgan('combined'));

app.use(bodyparser.json());

app.use(cors());

sequelize.sync()
.then(() => {
    app.listen(config.port);
    console.log("Server started on port",config.port);
    
})

