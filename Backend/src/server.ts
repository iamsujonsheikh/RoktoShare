import { Server } from "http";
import app from "./app";
import connectDB from "./config/database";
import { SECRET } from "./config/env";
import gracefulShutdown, { setServer } from "./config/shutdown";


let server: Server;

// START SERVER FUNCTION
const startServer = async () => {
    try {
        await connectDB();
        server = app.listen(SECRET.PORT, () => {
            console.log(`➡️  Server is running on http://localhost:${SECRET.PORT}`)
        });

        setServer(server);
    } catch (error: any) {
        console.error("Failed to start server:", error.message);
    }
};

await startServer();


// CALL SYNCHRONIZING ===> FIRST START SERVER THEN SEEDING SUPER ADMIN
// (async () => {
//     await startServer();
//     await seedAdmin();
// })();


// UNHANDLE REJECTION ERROR
process.on("uncaughtException", (error) => gracefulShutdown("Uncaught Exception", error));

// UNCAUGHT REJECTION ERROR
process.on("unhandledRejection", (error) => gracefulShutdown("Unhandled Rejection", error));

// SIGNAL TERMINATION SIGTERM
process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));
process.on("SIGINT", () => gracefulShutdown("SIGINT"));