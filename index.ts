import express, { Express, Request, Response } from "express";

import cors from "cors";
import dotenv from "dotenv";
import incidentRouter from "./modules/incidents/incidents.routes";

const port = process.env.PORT;
dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(cors());

//Routes
app.use("/incident", incidentRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the Enyata Api Team!");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
