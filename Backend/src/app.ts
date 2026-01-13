import express, { type Application, type Request, type Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { SECRET } from "./config/env";
import notFound from "./middlewares/notFound";


const app: Application = express();

// APPLICATION LEVEL MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    maxAge: 60,
}))

// APPLICATION ROOT ROUTES
app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        status: "success",
        message: "🩸Wellcome To RoktoShare Server.🩸",
        environment: SECRET.NODE_ENV,
        uptime: process.uptime().toFixed(2) + " sec",
        timeStamp: new Date().toISOString()
    });
});


// APPLICATON ROUTES MIDDLEWARES
// app.use("/api/v1",)


// NOT FOUND ROUTE
app.use(notFound);

// GLOBAL ERROR HANDLER

export default app;