import express, { urlencoded } from "express"
import cors from "cors";
import helmet from "helmet"
import cookieParser from "cookie-parser";
import todo from "./routes/todo.routes.js";

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

app.use("/todos", todo);

export default app;