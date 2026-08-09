import express, { type Response } from "express";
import type { Diagnosis } from "../types.ts";
import diagnosesService from "../services/diagnosesService.ts";

const router = express.Router();

router.get("/", (_req, res: Response<Diagnosis[]>) => {
  const data = diagnosesService.getDiagnoses();
  res.send(data);
});

router.post("/", (_req, res) => {
  res.send("saving a diagnosis");
});

export default router;
