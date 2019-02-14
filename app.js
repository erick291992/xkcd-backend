let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let config = require('./config/config');
var apiRoutes = require('./routes/routes');

const port = process.env.PORT || 3000
const app = express();

/******************
  Mongoose
******************/

mongoose.Promise = global.Promise;
// mongoose.connect(config.getDbConnectionString(), { useMongoClient: true });
mongoose.connect(config.getDbConnectionString(), { useNewUrlParser: true });

mongoose.connection
    .once('open', () => { console.log('connected to database'); })
    .on('error', (error) => {
        console.log('error', error);
        console.warn('Warning', error);
    });

// Used to parse body of requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', (req, res, next) => {
    console.log('Request Url: ' + req.url);
    // this will call the next route
    next();
});

app.get('/', (req, res, next) => {
    process.exit(1);
    res.send("HOME PAGE");
});

app.get('/home', (req, res, next) => {
    console.log(process.env.NODE_ENV)
    res.send("HOME PAGE");
});

/******************
  Routes
******************/

app.use('/api', apiRoutes);


/******************
  Error handling
******************/

// basic error handler  
app.use((req, res, next) => {
    console.log('we are handling error');
    let err = new Error('Not Found');
    console.log('-',err,'--');
    console.log("error status is here:",err.status)
    err.status = 404;
    //this will call the error handler below
    next(err);
});

// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    console.log('this is error handler');
    console.log(err.message);
    console.log('end of message');
    console.log("custom error status is here:",err.status)
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    // res.render('error');
    res.send({
        success: false,
        error: err
    });
});

app.listen(port,function (){
    console.log('listening on port:',port);
});