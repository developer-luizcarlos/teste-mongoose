import express,{ Express } from "express";
import router from "./routers/routes";
import "dotenv/config";

const app: Express = express();

app.use(express.json());
app.use("/",router);

export default app;