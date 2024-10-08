(require('dotenv').config())
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;
const MONGOURL = process.env.DB_URL;

// Database connection
mongoose
    .connect(MONGOURL, )
    .then(()=>{
        console.log('connecting to cluster');
        app.listen(PORT, ()=>{
            console.log(`server is running on port ${PORT}`)
        })
    })
    .catch((err) =>{
        console.log(err)
    })

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(session({
    secret: 'my key',
    saveUninitialized: false,
    resave : false
}))

app.use((req, res, next) =>{
    res.locals.message = req.session.message;
    delete req.session.message;
    next();
})

app.set('view engine', 'ejs');



app.use(express.static("uploads"));



app.use(express.static('public'));
app.use('css', express.static(__dirname + '/public/css'))






app.use("", require("./routes/routes"))

/*app.listen(PORT, () => {
  console.log(`Server starting at http://localhost:${PORT}`);
});*/
