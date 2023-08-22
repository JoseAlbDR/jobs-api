import express from "express";
import notFoundMiddleware from "./middleware/not-found";
import errorHandlerMiddleware from "./middleware/error-handler";
import dbConnect from "./db/connect";

const app = express();

// middleware
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Hello there!");
});

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
