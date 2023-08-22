import "express-async-errors";
import express from "express";
import notFoundMiddleware from "./middleware/not-found";
import errorHandlerMiddleware from "./middleware/error-handler";
import dbConnect from "./db/connect";
import authRouter from "./routes/auth";
import jobsRouter from "./routes/jobs";

const app = express();

// middleware
app.use(express.json());
app.use("/api/v1/jobs", jobsRouter);
app.use("/api/v1/auth", authRouter);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await dbConnect();
    console.log("CONNECTED TO THE DB...");
    app.listen(port, () => {
      console.log(`Server is listening on ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

void start();
