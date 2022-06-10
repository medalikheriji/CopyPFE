import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/MongoDb.js";
import { errorHandler, notFound } from "./Middleware/Errors.js";
import UserRoutes from "./Routes/UserRoutes.js";
import cors from "cors";
import StyleSheetRoutes from "./Routes/StyleSheetRoutes.js";



dotenv.config();
connectDatabase();
const app = express();
app.use(cors());

app.use(express.json({limit: '60mb'}));

// API
app.use("/api/users", UserRoutes);
app.use("/api/stylesheet", StyleSheetRoutes);


// ERROR HANDLER
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 1000;

app.listen(PORT, console.log(`server run in port ${PORT}`));
