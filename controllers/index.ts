import { Router, Request, Response } from "express";

const router = Router();

// Routes in use
router.get("/", (req: Request, res: Response): void => {
  let users = ["Goon", "Tsuki", "Joe"];
  res.status(200).send(users);
});

router.use("*", (req, res) => {
  res.status(404).send("Resource Not Found");
});

export { router };
