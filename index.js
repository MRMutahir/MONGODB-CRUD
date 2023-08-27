console.log("SALAM");
import Express, { Router } from "express";
import { MongoClient } from "mongodb";
import { router } from "./routes/routes.js";
import morgan from "morgan";
import helmet from "helmet";
import { User } from "./model/model.js";

let app = Express();
app.use(Express.json());
app.use(helmet());
app.use(morgan("common"));

let uri = `mongodb+srv://mutahirkareem820:zYgah8t4j4Y7fPnx@cluster0.d6rq4l1.mongodb.net/`;
const mongodb_client = new MongoClient(uri);
async function start() {
  try {
    await mongodb_client.connect();
    console.log("Successfully connected to Atlas");
  } catch (error) {
    console.log(error);
  } finally {
    await mongodb_client.close();
  }
}
start().catch(console.dir);

let port = 8000;
app.use((req, res, next) => {
  next();
});
app.use("/auth", router);

app.listen(port, () => {
  console.log("server start");
});
