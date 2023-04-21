import express, { Application, Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";

const serverConfig = require("./config");

import { router as userRoutes } from "../controllers/index";

const app: Application = express();

app.use(bodyParser.json());
dotenv.config();

// app.use(, userRoutes);

const startServer = async () => {
  const PORT = process.env.PORT;
  const app = await serverConfig();
  app.use("/api", userRoutes);
  return app.listen(PORT, () => {
    console.log(`[INFO] Listening on port ${PORT}!`);
  });
};

startServer();

export default app;
