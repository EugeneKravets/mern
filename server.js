import dotenv from "dotenv";
dotenv.config();
import "express-async-errors";
import morgan from "morgan";

// import cors from "cors";
//
import express from "express";
const app = express();
//
// db and authenticated
import connectDB from "./db/connect.js";
//
// routers
import authRouter from "./routes/authRoutes.js";
import jobsRouter from "./routes/jobsRoutes.js";

//
// middleware
if (process.env.NODE_ENV !== "production") {
   app.use(morgan("dev"));
}
app.use(express.json());
// app.use(cors());
import errorHandlerMiddleware from "./middleware/error-handler.js";
import notFoundMiddleware from "./middleware/not-found.js";
import authenticateUser from "./middleware/auth.js";

app.get("/", (req, res) => {
   res.send("welcome");
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", authenticateUser, jobsRouter);
//
//
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
//
//
const port = process.env.PORT || 5000;
const start = async () => {
   try {
      const dbUrl = process.env.MONGO_URL.replace("<PASSWORD>", process.env.DATABASE_PASSWORD);
      await connectDB(dbUrl);
      app.listen(port, () => {
         console.log(`Server is listening ${port}`);
      });
   } catch (error) {
      console.log(error);
   }
};
start();
