import "express-async-errors";
import express from "express";
import notFoundMiddleware from "./middleware/not-found";
import errorHandlerMiddleware from "./middleware/error-handler";
import dbConnect from "./db/connect";
import authRouter from "./routes/auth";
import jobsRouter from "./routes/jobs";
import authenticateUser from "./middleware/authentication";
// Extra security
import helmet from "helmet";
import cors from "cors";
import rateLimiter from "express-rate-limit";
import xss from "./middleware/xssMiddleware";
const app = express();

// middleware
app.set("trust proxy", 1);
app.use(
  rateLimiter({
    windowMs: 60 * 60 * 1000,
    message:
      "Too many accounts created from this IP, please try again after an hour",
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
  })
);
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss);
app.use("/api/v1/jobs", authenticateUser, jobsRouter);
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
