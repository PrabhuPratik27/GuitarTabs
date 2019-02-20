const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(morgan('combined'));

app.use(bodyparser.json());

app.use(cors());

app.post('/register', (req,res) =>{
    res.send({
        message: "Hello " + req.body.email + ". The user was registered"
    })
});

app.listen(process.env.PORT || 9000);