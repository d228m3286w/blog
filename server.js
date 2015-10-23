


var fs = require('fs'),
mongoose     = require('mongoose'),
db           = require('./models/db'),
Blog         = require('./models/blog'),
blogRoutes   = require('./routes/blog'),
express      = require('express'),
app          = express(),
path         = require('path'),
bodyParser   = require('body-parser'),
router       = express.Router(),
axios        = require('axios'),
_            = require('lodash'),
passport     = require('passport'),
flash        = require('connect-flash'),
session      = require('express-session'),
morgan       = require('morgan'),
cookieParser = require('cookie-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded());



app.use('/', express.static(path.join(__dirname, 'public')));


app.use('/api/blog/', blogRoutes);


app.get('/', function(req, res){
    res.sendFile('blog.html');
})

require('./config/passport')(passport); // pass passport for configuration

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs'); // set up ejs for templating

// required for passport
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// routes ======================================================================
require('./routes/userRoutes.js')(app, passport); // load routes & pass in app & fully configed passport



app.set('port', process.env.PORT || 4000);

var server = app.listen(app.get('port'), function(){ 
  console.log('Express server listening on port ' + server.address().port)
});











