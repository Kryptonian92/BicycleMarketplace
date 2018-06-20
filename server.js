let express    = require("express");
let session    = require("express-session");
let flash      = require("express-flash");
let bodyParser = require("body-parser");
let mongoose   = require("mongoose");
let path       = require("path");
let bcrypt     = require("bcrypt");
let port       = 8000;

let app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname,'/client/public/dist')));
app.use(flash());

app.use(session({
	secret:"1kjagsdailusdyoiausyd",
	resave:false,
	saveUnitialized:true,
	cookie:{maxAge:60000}
}));

require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);

app.listen(port,()=>{
	console.log("Listening on:",port)
});