import express, { urlencoded } from "express"
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet"
import cookieParser from "cookie-parser";

const app = express();

// Parse JSON bodies
app.use(express.json());

// Parse URL-encoded bodies
app.use(express(urlencoded({extended: true})))

// Serve static files
app.use(express.static('public'));

// Helmet secures your Express.js app by setting HTTP security headers.
app.use(helmet());
// Cross origin resource sharing 
// app.use(cors()) // ✅ allow all origins

// parse cookies
app.use(cookieParser());

// Restrict to specific origin (important for production)
app.use(cors({
  origin: 'http://localhost:5173'
}));

app.use(morgan('combined')); // Morgan is a middleware used to log HTTP requests in Node.js applications.

app.get("/", (req, res)=>{
    console.log(req.cookies); // fetches cookies from incoming req's
    res.cookie("name", "raghu"); // setting cookie
    res.status(200).send({"message": "active"});
})

app.listen(8080, ()=>{
    console.log("listening on port 8080")
})
