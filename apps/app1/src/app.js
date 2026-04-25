import express, { urlencoded } from "express"
import cors from "cors";
import helmet from "helmet"
import cookieParser from "cookie-parser";
import todo from "./routes/todo.routes.js";
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My API',
      version: '1.0.0'
    }
  },
  apis: ['./src/routes/*.js']
};

const specs = swaggerJsdoc(options);

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


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use("/todos", todo);

// 4. 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

// 5. Error handler (always last)
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Server error' });
});

export default app;